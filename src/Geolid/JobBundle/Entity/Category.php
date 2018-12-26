<?php
namespace Geolid\JobBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * Job category Entity.
 *
 * @ORM\Entity()
 * @ORM\Table(name="job_category")
 */
class Category
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
        $this->jobs = new ArrayCollection();
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
     * @ORM\OneToMany(targetEntity="Job", mappedBy="category")
     */
    protected $jobs;

    /**
     * Name.
     *
     * @ORM\Column(name="name",type="string")
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
     * @return Job
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
