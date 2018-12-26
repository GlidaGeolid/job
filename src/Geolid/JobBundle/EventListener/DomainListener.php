<?php
namespace Geolid\JobBundle\EventListener;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\HttpKernel;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

/**
 * Redirect any requests without international subdomain
 * to the default home.
 */
class DomainListener implements EventSubscriberInterface
{
    /** @var string $countries */
    private $countries;

    /** @var string $domain */
    private $domain;

    /** @var UrlGeneratorInterface $router */
    private $router;

    /**
     * Constructor.
     *
     * @param string $domain
     * @param string $countries
     * @param UrlGeneratorInterface $router
     */
    public function __construct(
        $domain,
        $countries,
        UrlGeneratorInterface $router
    ) {
        $this->domain = $domain;
        $this->countries = $countries;
        $this->router = $router;
    }

    /**
     * @inherit
     */
    public static function getSubscribedEvents()
    {
        return array(KernelEvents::REQUEST => 'onKernelRequest');
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
        $host = $request->getHost();
        $domain = $this->domain;

        preg_match('/([a-z]{2})\.'.$domain.'/', $host, $matches);
        if (!empty($matches)
            && in_array($matches[1], $this->countries)) {
            return;
        }

        $url = $this->router->generate('job_home');
        $event->setResponse(new RedirectResponse($url));
    }
}
