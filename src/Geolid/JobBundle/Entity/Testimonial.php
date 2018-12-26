<?php
namespace Geolid\JobBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * Testimonial Entity.
 *
 * @ORM\Entity(repositoryClass="Geolid\JobBundle\Repository\TestimonialRepository")
 * @ORM\Table(name="job_testimonial")
 */
class Testimonial
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
    }
    /**
     * Testimonial id.
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
     * Title.
     *
     * @ORM\Column(name="title",type="string")
     */
    protected $title;

    /**
     * Set title.
     *
     * @param string $title
     * @return Job
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
     * Quote.
     *
     * @ORM\Column(name="quote",type="text",nullable=true)
     */
    protected $quote;

    /**
     * Set quote.
     *
     * @param string $quote
     * @return Job
     */
    public function setQuote($quote)
    {
        $this->quote = $quote;
        return $this;
    }

    /**
     * Get quote.
     *
     * @return string
     */
    public function getQuote()
    {
        return $this->quote;
    }

    /**
     * Photo.
     *
     * @ORM\Column(name="photo",type="string",nullable=true)
     */
    protected $photo;

    /**
     * Set photo.
     *
     * @param string $photo
     * @return Job
     */
    public function setPhoto($photo)
    {
        $this->photo = $photo;
        return $this;
    }

    /**
     * Get photo.
     *
     * @return string
     */
    public function getPhoto()
    {
        return $this->photo;
    }

    /**
     * Orientation.
     *
     * @ORM\Column(name="orientation",type="string",nullable=true)
     */
    protected $orientation;

    /**
     * Set orientation.
     *
     * @param string $orientation
     * @return Job
     */
    public function setOrientation($orientation)
    {
        $this->orientation = $orientation;
        return $this;
    }

    /**
     * Get orientation.
     *
     * @return string
     */
    public function getOrientation()
    {
        return $this->orientation;
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
