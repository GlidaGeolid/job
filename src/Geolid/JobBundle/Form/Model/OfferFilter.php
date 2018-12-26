<?php
namespace Geolid\JobBundle\Form\Model;

use Symfony\Component\Validator\Constraints as Assert;

class OfferFilter
{
    /** @var \Geolid\JobBundle\Entity\Job */
    public $job;

    /** @var \Geolid\JobBundle\Entity\Sector */
    public $sector;

    /** @var \Geolid\JobBundle\Entity\Agency */
    public $agency;

    /**
     * @var interger
     * @Assert\Type(type="integer")
     */
    public $contract;
}
