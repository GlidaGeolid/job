<?php
namespace Geolid\JobBundle\Entity;

use Datetime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * User.
 *
 * @ORM\Entity()
 * @ORM\HasLifecycleCallbacks()
 * @ORM\Table(name="comptes")
 */
class User
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
     * Name.
     *
     * @ORM\Column(name="nom",type="string")
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
     * Email.
     *
     * @ORM\Column(name="email",type="string")
     */
    protected $email;

    /**
     * Set email.
     *
     * @param string $email
     * @return Job
     */
    public function setEmail($email)
    {
        $this->email = $email;
        return $this;
    }

    /**
     * Get email.
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }
}
