<?php

namespace Geolid\JobBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * Sector Entity.
 *
 * @ORM\Entity()
 * @ORM\Table(name="job_sector")
 */
class Sector
{
    /**
     * Entity as string.
     *
     * @return string
     */
    public function __toString()
    {
        return $this->getName();
    }

    /**
     * Constructor.
     */
    public function __construct()
    {
        $this->offers = new ArrayCollection();
    }

    /**
     * @ORM\OneToMany(targetEntity="Offer", mappedBy="sector")
     */
    protected $offers;

    /**
     * Add offer.
     *
     * @param \Geolid\JobBundle\Entity\Offer $offer
     */
    public function addOffer(Offer $offer)
    {
        $this->offers[] = $offer;
    }

    /**
     * Get offers.
     *
     * @return Doctrine\Common\Collections\Collection
     */
    public function getOffers()
    {
        return $this->offers;
    }

    /**
     * Remove offer.
     *
     * @param \Geolid\OfferBundle\Entity\Offer $offer
     */
    public function removeOffer(Offer $offer)
    {
        $this->offers->removeElement($offer);
    }

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
     * Name.
     *
     * @ORM\Column(name="name",type="string",length=255)
     */
    protected $name;

    /**
     * Set name.
     *
     * @param string $name
     * @return Job
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name.
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }
}
