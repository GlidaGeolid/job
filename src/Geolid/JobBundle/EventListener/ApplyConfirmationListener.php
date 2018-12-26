<?php
namespace Geolid\JobBundle\EventListener;

use Geolid\JobBundle\Event\FormEvent;
use Geolid\JobBundle\GeolidJobEvents;
use Geolid\JobBundle\Mailer\Mailer;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

/**
 * Send a confirmation email when an application is created.
 */
class ApplyConfirmationListener implements EventSubscriberInterface
{
    private $mailer;
    private $session;

    public function __construct(Mailer $mailer, SessionInterface $session)
    {
        $this->mailer = $mailer;
        $this->session = $session;
    }

    public static function getSubscribedEvents()
    {
        return array(GeolidJobEvents::APPLICATION_CREATE => 'onApplicationCreate');
    }

    public function onApplicationCreate(FormEvent $event)
    {
        /** @var $application \Geolid\JobBundle\Entity\Application */
        $application = $event->getForm()->getData();

        $this->mailer->sendConfirmationEmailMessage($application);

        $this->session->set('job_apply/email', $application->getEmail());
    }
}
