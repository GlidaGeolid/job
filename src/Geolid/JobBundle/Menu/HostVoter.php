<?php
namespace Geolid\JobBundle\Menu;

use Knp\Menu\ItemInterface;
use Knp\Menu\Matcher\Voter\VoterInterface;

/**
 * Voter based on the host.
 */
class HostVoter implements VoterInterface
{
    private $host;

    public function __construct($host = null)
    {
        $this->host = $host;
    }

    public function setHost($host)
    {
        $this->host = $host;
    }

    public function matchItem(ItemInterface $item)
    {
        if (null === $this->host || null === $item->getUri()) {
            return null;
        }

        if (strpos($item->getUri(), $this->host) !== false) {
            return true;
        }

        return null;
    }
}
