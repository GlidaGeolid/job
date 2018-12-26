<?php
namespace Geolid\JobBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;

/**
 * Post Entity.
 *
 * @ORM\Entity(repositoryClass="Geolid\JobBundle\Repository\PostRepository")
 * @ORM\Table(name="vitrine_news")
 */
class Post
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
     * Title.
     *
     * @ORM\Column(name="titre",type="string")
     */
    protected $title;

    /**
     * Set title.
     *
     * @param string $title
     * @return Offer
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
     * Slug.
     *
     * @ORM\Column(name="seo",type="string")
     */
    protected $slug;

    /**
     * Set slug.
     *
     * @param string $slug
     * @return Offer
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
     * @return Offer
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
     * Published.
     *
     * @ORM\Column(name="actif",type="integer")
     */
    protected $published;

    /**
     * Set published.
     *
     * @param string $published
     * @return Offer
     */
    public function setPublished($published)
    {
        $this->published = $published;
        return $this;
    }

    /**
     * Get published.
     *
     * @return string
     */
    public function getPublished()
    {
        return $this->published;
    }

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
}
