<?php
namespace Geolid\JobBundle\EventListener;

use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\HttpKernel;

/**
 * Set the country global var depending on the host subdomain.
 */
class CountryListener implements EventSubscriberInterface
{
    /** @var string $countries */
    private $countries;

    /** @var ContainerInterface $container */
    private $container;

    /** @var string $domain */
    private $domain;

    /**
     * Constructor.
     *
     * @param string $domain
     * @param string $countries
     * @param ContainerInterface $container
     */
    public function __construct(
        $domain,
        $countries,
        ContainerInterface $container
    ) {
        $this->domain = $domain;
        $this->countries = $countries;
        $this->container = $container;
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
        if (empty($matches)
            || !in_array($matches[1], $this->countries)) {
            return;
        }

        $this->container->set('country', $matches[1]);
    }
}
