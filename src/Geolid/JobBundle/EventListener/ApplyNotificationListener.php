<?php
namespace Geolid\JobBundle\EventListener;

use Doctrine\ORM\EntityManager;
use Geolid\JobBundle\Event\FormEvent;
use Geolid\JobBundle\GeolidJobEvents;
use Geolid\JobBundle\Mailer\Mailer;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

/**
 * Send internal notifications emails when an application is created.
 */
class ApplyNotificationListener implements EventSubscriberInterface
{
    /** @var ContainerInterface $container */
    private $container;
    /** @var \Doctrine\ORM\EntityManager $em */
    private $em;
    /** @var \Geolid\JobBundle\Mailer\Mailer $mailer */
    private $mailer;
    /** @var string $applicationsUrl */
    private $applicationsUrl;
    /** @var array $notifications */
    private $notifications;
    /** @var string $rhManagerUrl */
    private $rhManagerUrl;
    /** @var string */
    private $geolidLegacyApiUrl;

    /**
     * Constructor.
     *
     * @param ContainerInterface $container
     */
     public function __construct(
        ContainerInterface $container,
        EntityManager $entityManager,
        Mailer $mailer,
        $applicationsUrl,
        $notifications,
        $rhManagerUrl,
        $geolidLegacyApiUrl
     ) {
         $this->container = $container;
         $this->em = $entityManager;
         $this->mailer = $mailer;
         $this->applicationsUrl = $applicationsUrl;
         $this->notifications = $notifications;
         $this->rhManagerUrl = $rhManagerUrl;
         $this->geolidLegacyApiUrl = $geolidLegacyApiUrl;
     }

    public static function getSubscribedEvents()
    {
        return array(GeolidJobEvents::APPLICATION_CREATE => 'onApplicationCreate');
    }

    public function onApplicationCreate(FormEvent $event)
    {
        /** @var $application \Geolid\JobBundle\Entity\Application */
        $application = $event->getForm()->getData();
        /** @var $offer \Geolid\JobBundle\Entity\Offer */
        $offer = $event->getForm()->get('offer')->getData();

        /**
         * When the offer is empty it means that we have
         * a spontaneous application.
         *
         * Send notfications if some emails are configured
         * for the country website.
         */
        $country = $this->container->get('country');
        if (empty($offer) &&
            isset($this->notifications[$country])) {
            foreach ($this->notifications[$country] as $email) {
                $this->mailer->sendNotificationEmailMessage(
                    $email,
                    $application,
                    $offer,
                    $this->applicationsUrl,
                    $this->rhManagerUrl,
                    $this->geolidLegacyApiUrl
                );
            }
        }
        /**
         * Else do nothing.
         */
        if (empty($offer)) {
            return;
        }

        $offerRepository = $this->em->getRepository('GeolidJobBundle:Offer');
        $recipients = $offerRepository->recipients($offer->getId());

        foreach ($recipients as $recipient) {
            $this->mailer->sendNotificationEmailMessage(
                $recipient->getEmail(),
                $application,
                $offer,
                $this->applicationsUrl,
                $this->rhManagerUrl,
                $this->geolidLegacyApiUrl
            );
        }
    }
}
