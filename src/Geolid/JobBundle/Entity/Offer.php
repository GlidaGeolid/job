<?php
namespace Geolid\JobBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Geolid\JobBundle\Entity\Agency;
use Geolid\JobBundle\Entity\Job;
use Geolid\JobBundle\Entity\Sector;
use Geolid\JobBundle\Entity\User;

/**
 * Offer.
 *
 * @ORM\Entity(repositoryClass="Geolid\JobBundle\Repository\OfferRepository")
 * @ORM\HasLifecycleCallbacks()
 * The table name "recrutement" is also used in OfferRepository.
 * @ORM\Table(name="recrutement")
 */
class Offer
{
    /**
     * Entity as string.
     *
     * @return string
     */
    public function __toString()
    {
        return $this->getTitle();
    }

    /**
     * Constructor.
     */
    public function __construct()
    {
        $this->contracts = array(
            self::CONTRACT_CDI,
            self::CONTRACT_CDD,
            self::CONTRACT_STAGE,
            self::CONTRACT_ALTERNANCE,
        );
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
     * Agency.
     *
     * @ORM\ManyToOne(targetEntity="\Geolid\JobBundle\Entity\Agency")
     * @ORM\JoinColumn(name="id_agence",referencedColumnName="id")
     */
    protected $agency;

    /**
     * Set agency
     *
     * @param \Geolid\JobBundle\Entity\Agency $agency
     * @return Offer
     */
    public function setAgency(Agency $agency = null)
    {
        $this->agency = $agency;
        return $this;
    }

    /**
     * Get agency
     *
     * @return \Geolid\JobBundle\Entity\Agency
     */
    public function getAgency()
    {
        return $this->agency;
    }

    /**
     * Sector.
     *
     * @ORM\ManyToOne(targetEntity="Sector", inversedBy="offers")
     * @ORM\JoinColumn(name="id_secteur",referencedColumnName="id")
     */
    protected $sector;

    /**
     * Set sector.
     *
     * @param \Geolid\JobBundle\Entity\Sector $sector
     * @return Offer
     */
    public function setSector($sector)
    {
        $this->sector = $sector;
        return $this;
    }

    /**
     * Get sector.
     *
     * @return \Geolid\JobBundle\Entity\Sector
     */
    public function getSector()
    {
        return $this->sector;
    }

    /**
     * Job.
     *
     * @ORM\ManyToOne(targetEntity="Job")
     * @ORM\JoinColumn(name="id_job",referencedColumnName="id")
     */
    protected $job;

    /**
     * Set job.
     *
     * @param \Geolid\JobBundle\Entity\Job $job
     * @return \Geolid\JobBundle\Entity\Job
     */
    public function setJob(Job $job)
    {
        $this->job = $job;
        return $this;
    }

    /**
     * Get job.
     *
     * @return string
     */
    public function getJob()
    {
        return $this->job;
    }

    /**
     * Title.
     *
     * @ORM\Column(name="titre",type="string")
     */
    protected $title;

    /**
     * Set title.   
     *
     * @param string $title
     * @return \Geolid\JobBundle\Entity\Offer
     */
    public function setTitle($title)
    {
        $this->title = $title;
        return $this;
    }

    /**
     * Get title.
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Contract enum.
     *
     * @var array $contracts All types of contracts.
     */
    protected $contracts;

    const CONTRACT_CDI = 1;
    const CONTRACT_CDD = 2;
    const CONTRACT_STAGE = 3;
    const CONTRACT_ALTERNANCE = 4;

    /**
     * Contract type.
     *
     * @ORM\Column(name="id_contrat",type="string")
     */
    protected $contract;

    /**
     * Set contract.
     *
     * @param string $contract
     * @return \Geolid\JobBundle\Entity\Offer
     */
    public function setContract($contract)
    {
        // Enum check.
        if (!in_array($contract, $this->contracts)) {
            throw new \InvalidArgumentException("Invalid contract");
        }
        $this->contract = $contract;
        return $this;
    }

    /**
     * Get contract.
     *
     * @return string
     */
    public function getContract()
    {
        return $this->contract;
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
     * @return \Geolid\JobBundle\Entity\Offer
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

    /**
     * Geographical zone.
     *
     * @ORM\Column(name="zone",type="string")
     */
    protected $zone;

    /**
     * Set zone.
     *
     * @param string $zone
     * @return \Geolid\JobBundle\Entity\Offer
     */
    public function setZone($zone)
    {
        $this->zone = $zone;
        return $this;
    }

    /**
     * Get zone.
     *
     * @return string
     */
    public function getZone()
    {
        return $this->zone;
    }

    /**
     * @ORM\Column(name="content",type="text")
     */
    protected $content;

    /**
     * Set content.
     *
     * @param string $content
     * @return \Geolid\JobBundle\Entity\Offer
     */
    public function setContent($content)
    {
        $this->content = $content;
        return $this;
    }

    /**
     * Get content.
     *
     * @return string
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * Online.
     *
     * @ORM\Column(name="online",type="string")
     */
    protected $online;

    /**
     * Set online.
     *
     * @param string $online
     * @return \Geolid\JobBundle\Entity\Offer
     */
    public function setOnline($online)
    {
        $this->online = $online;
        return $this;
    }

    /**
     * Get online.
     *
     * @return string
     */
    public function getOnline()
    {
        return $this->online;
    }

    /**
     * Date.
     *
     * TODO: Update this to type datetime.
     *
     * @ORM\Column(name="date",type="integer")
     */
    protected $date;

    /**
     * Set date.
     *
     * @param string $date
     * @return \Geolid\JobBundle\Entity\Offer
     */
    public function setDate($date)
    {
        $this->date = $date;
        return $this;
    }

    /**
     * Get date.
     *
     * @return string
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Recipients.
     *
     * @ORM\Column(name="alertes_mail",type="text")
     */
    protected $recipients;

    /**
     * Set recipients.
     *
     * @param string $recipients
     * @return \Geolid\JobBundle\Entity\Offer
     */
    public function setRecipients($recipients)
    {
        $this->recipients = $recipients;
        return $this;
    }

    /**
     * Get recipients.
     *
     * @return string
     */
    public function getRecipients()
    {
        return $this->recipients;
    }

    /**
     * Creation date.
     *
     * @var datetime $created
     *
     * @Gedmo\Timestampable(on="create")
     * @ORM\Column(type="datetime",nullable=true)
     */
    private $created;

    /**
     * Get creation date.
     *
     * @return string
     */
    public function getCreated()
    {
        return $this->created;
    }

    /**
     * Last update date.
     *
     * @var datetime $updated
     *
     * @Gedmo\Timestampable(on="update")
     * @ORM\Column(type="datetime",nullable=true)
     */
    private $updated;

    /**
     * Get last update date.
     *
     * @return string
     */
    public function getUpdated()
    {
        return $this->updated;
    }

    /**
     * Status.
     *
     * @ORM\Column(type="string",nullable=true)
     */
    protected $status;

    /**
     * Set status.
     *
     * @param string $status
     * @return \Geolid\JobBundle\Entity\Offer
     */
    public function setStatus($status)
    {
        $this->status = $status;
        return $this;
    }

    /**
     * Get status.
     *
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * Get last status modification date.
     *
     * @var datetime $statusChanged
     *
     * @ORM\Column(name="status_changed",type="datetime",nullable=true)
     * @Gedmo\Timestampable(on="change",field={"status"})
     */
    private $statusChanged;

    /**
     * Get status modification date.
     *
     * @return string
     */
    public function getStatusChanged()
    {
        return $this->statusChanged;
    }
}
