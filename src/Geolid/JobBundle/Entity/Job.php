<?php
namespace Geolid\JobBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * Job Entity.
 *
 * @ORM\Entity(repositoryClass="Geolid\JobBundle\Repository\JobRepository")
 * @ORM\Table(name="job_job")
 */
class Job
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
     * @ORM\ManyToOne(targetEntity="Category", inversedBy="jobs")
     * @ORM\JoinColumn(name="category_id", referencedColumnName="id")
     */
    protected $category;

    /**
     * Set category.
     *
     * @param string $category
     * @return Job
     */
    public function setCategory($category)
    {
        $this->category = $category;
        return $this;
    }

    /**
     * Get category.
     *
     * @return string
     */
    public function getCategory()
    {
        return $this->category;
    }

    /**
     * @ORM\ManyToOne(targetEntity="\Geolid\JobBundle\Entity\Sector")
     * @ORM\JoinColumn(name="sector_id", referencedColumnName="id")
     */
    protected $sector;

    /**
     * Set sector.
     *
     * @param string $sector
     * @return Job
     */
    public function setSector($sector)
    {
        $this->sector = $sector;
        return $this;
    }

    /**
     * Get sector.
     *
     * @return string
     */
    public function getSector()
    {
        return $this->sector;
    }

    /**
     * @Gedmo\Slug(fields={"title"})
     * @ORM\Column(name="slug",type="string",length=255,unique=true,nullable=true)
     */
    protected $slug;

    /**
     * Set slug.
     *
     * @param string $slug
     * @return Job
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
     * Title.
     *
     * @ORM\Column(name="title",type="string",length=255)
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
     * Baseline.
     *
     * @ORM\Column(name="baseline",type="text",nullable=true)
     */
    protected $baseline;

    /**
     * Set baseline.
     *
     * @param string $baseline
     * @return Job
     */
    public function setBaseline($baseline)
    {
        $this->baseline = $baseline;
        return $this;
    }

    /**
     * Get baseline.
     *
     * @return string
     */
    public function getBaseline()
    {
        return $this->baseline;
    }

    /**
     * Content.
     *
     * @ORM\Column(name="content",type="text",nullable=true)
     */
    protected $content;

    /**
     * Set content.
     *
     * @param string $content
     * @return Job
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
     * Testimonial 1.
     *
     * @ORM\OneToOne(targetEntity="Testimonial")
     * @ORM\JoinColumn(name="testimonial1_id",referencedColumnName="id")
     */
    protected $testimonial1;

    /**
     * Set testimonial 1.
     *
     * @param Testimonial $testimonial1
     * @return Job
     */
    public function setTestimonial1(Testimonial $testimonial1)
    {
        $this->testimonial1 = $testimonial1;
        return $this;
    }

    /**
     * Get testimonial 1.
     *
     * @return Testimonial
     */
    public function getTestimonial1()
    {
        return $this->testimonial1;
    }

    /**
     * Testimonial 2.
     *
     * @ORM\OneToOne(targetEntity="Testimonial")
     * @ORM\JoinColumn(name="testimonial2_id",referencedColumnName="id")
     */
    protected $testimonial2;

    /**
     * Set testimonial 2.
     *
     * @param Testimonial $testimonial2
     * @return Job
     */
    public function setTestimonial2(Testimonial $testimonial2)
    {
        $this->testimonial2 = $testimonial2;
        return $this;
    }

    /**
     * Get testimonial 2.
     *
     * @return Testimonial
     */
    public function getTestimonial2()
    {
        return $this->testimonial2;
    }

    /**
     * Testimonial 3.
     *
     * @ORM\OneToOne(targetEntity="Testimonial")
     * @ORM\JoinColumn(name="testimonial3_id",referencedColumnName="id")
     */
    protected $testimonial3;

    /**
     * Set testimonial 3.
     *
     * @param Testimonial $testimonial3
     * @return Job
     */
    public function setTestimonial3(Testimonial $testimonial3)
    {
        $this->testimonial3 = $testimonial3;
        return $this;
    }

    /**
     * Get testimonial 3.
     *
     * @return Testimonial
     */
    public function getTestimonial3()
    {
        return $this->testimonial3;
    }

    /**
     * Starred.
     *
     * @ORM\Column(name="starred",type="integer",nullable=true)
     */
    protected $starred;

    /**
     * Set starred.
     *
     * @param string $starred
     * @return Offer
     */
    public function setStarred($starred)
    {
        $this->starred = $starred;
        return $this;
    }

    /**
     * Get starred.
     *
     * @return string
     */
    public function getStarred()
    {
        return $this->starred;
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
