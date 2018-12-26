<?php
namespace Geolid\JobBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * International pages.
 *
 * @ORM\Entity()
 * @ORM\Table(name="job_international")
 */
class International
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
     * @ORM\Column(name="country",type="string",unique=true)
     */
    protected $country;

    /**
     * Set country.
     *
     * @param string $country
     * @return International
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
     * Config.
     *
     * @ORM\Column(name="config",type="text",nullable=true)
     */
    protected $config;

    /**
     * Set config.
     *
     * @param string $config
     * @return International
     */
    public function setConfig($config)
    {
        $this->config = json_encode($config);
        return $this;
    }

    /**
     * Get config.
     *
     * @return string
     */
    public function getConfig()
    {
        return json_decode($this->config);
    }
}
