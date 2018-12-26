<?php
namespace Geolid\JobBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Referer Entity.
 *
 * @ORM\Entity(repositoryClass="Geolid\JobBundle\Repository\RefererRepository")
 * @ORM\Table(name="rh_referer")
 */
class Referer
{
    /**
     * Id.
     *
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(name="id",type="integer")
     * @var integer
     */
    protected $id;

    /**
     * Get id.
     *
     * @return string
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Referer.
     *
     * @ORM\Column(name="referer",type="string")
     */
    protected $referer;

    /**
     * Set referer.
     *
     * @param string $referer
     * @return Referer
     */
    public function setReferer($referer)
    {
        $this->referer = $referer;
        return $this;
    }

    /**
     * Get referer.
     *
     * @return string
     */
    public function getReferer()
    {
        return $this->referer;
    }

    /**
     * Constructor.
     */
    public function __construct()
    {
    }
}
