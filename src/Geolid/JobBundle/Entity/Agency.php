<?php
namespace Geolid\JobBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Agency Entity.
 *
 * @ORM\Entity()
 * @ORM\Table(name="agences")
 */
class Agency
{
    /**
     * Constructor.
     */
    public function __construct()
    {
    }

    /**
     * Agency as string.
     *
     * @return string
     */
    public function __toString()
    {
        return $this->getName();
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
     * Country.
     *
     * @ORM\Column(name="country",type="string")
     */
    protected $country;

    /**
     * Set country.
     *
     * @param string $country
     * @return Agency
     */
    public function setCountry($country)
    {
        $this->country = $country;
        return $this;
    }

    /**
     * Get country.
     *
     * @return string
     */
    public function getCountry()
    {
        return $this->country;
    }

    /**
     * Name.
     *
     * @ORM\Column(name="nom",type="string")
     */
    protected $name;

    /**
     * Set name.
     *
     * @param string $name
     * @return Agency
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

    /**
     * Slug.
     *
     * @ORM\Column(name="url",type="string")
     */
    protected $slug;

    /**
     * Set slug.
     *
     * @param string $slug
     * @return Agency
     */
    public function setSlug($slug)
    {
        $this->slug = $slug;
        return $this;
    }

    /**
     * Get slug.
     *
     * @return string
     */
    public function getSlug()
    {
        return $this->slug;
    }
}
