<?php
namespace Geolid\JobBundle\EventListener;

use Doctrine\ORM\EntityManager;
use Geolid\JobBundle\Entity\Referer;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\HttpKernel\HttpKernel;

/**
 * Save the referrer into the session.
 */
class RefererListener implements EventSubscriberInterface
{
    /** @var \Doctrine\ORM\EntityManager $em */
    private $em;

    /** @var \Symfony\Component\HttpFoundation\Session\SessionInterface $session */
    private $session;

    /**
     * Constructor.
     *
     * @param EntityManager $entityManager
     * @param SessionInterface $session
     */
    public function __construct(EntityManager $entityManager, SessionInterface $session)
    {
        $this->em = $entityManager;
        $this->session = $session;
    }

    /**
     * @inherit
     */
    public static function getSubscribedEvents()
    {
        return array(
            'kernel.request' => 'onKernelRequest',
        );
    }

    /**
     * @inherit
     */
    public function onKernelRequest(GetResponseEvent $event)
    {
        if ($event->getRequestType() !== HttpKernel::MASTER_REQUEST) {
            return;
        }

        $request = $event->getRequest();
        $session = $request->getSession();

        if ($session->has('job_apply/referer')) {
            return;
        }

        $referer = $request->headers->get('referer');

        /**
         * This suppose the unknow referer has an id of 1.
         */
        $unknowReferer = 1;

        if ($referer) {
            $host = parse_url($referer)['host'];

            $repository = $this->em->getRepository('GeolidJobBundle:Referer');
            $referer = $repository->findOneByRefererOrCreate($host);

            $session->set('job_apply/referer', $referer->getId());
        }
        else {
            $session->set('job_apply/referer', $unknowReferer);
        }
    }
}
