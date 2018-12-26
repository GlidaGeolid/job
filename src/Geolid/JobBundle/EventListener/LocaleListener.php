<?php
namespace Geolid\JobBundle\EventListener;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\GetResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\HttpKernel;

/**
 * Set the locale depending on the host's subdomain.
 *
 * E.g.: for the uk subdomain the locale will be set to en.
 * Default locale is set to fr.
 */
class LocaleListener implements EventSubscriberInterface
{
    /** @var string $countries */
    private $countries;

    /** @var string $domain */
    private $domain;

    /**
     * Constructor.
     *
     * @param string $domain
     * @param string $countries
     */
    public function __construct($domain, $countries)
    {
        $this->domain = $domain;
        $this->countries = $countries;
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

        switch ($matches[1]) {
            case 'uk':
                $request->setLocale('en');
                break;
            default:
                $request->setLocale($matches[1]);
                break;
        }
    }
}
