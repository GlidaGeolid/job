<?php
namespace Geolid\JobBundle\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Geolid\JobBundle\Entity\Agency;
use Geolid\JobBundle\Entity\Offer;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Validator\Constraints as Assert;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 * Application Entity.
 *
 * @ORM\Entity(repositoryClass="Geolid\JobBundle\Repository\ApplicationRepository")
 * @Vich\Uploadable
 * @ORM\HasLifecycleCallbacks()
 * @ORM\Table(name="rh_candidats")
 * ORM\Table(name="job_application")
 */
class Application
{
    /**
     * Constructor.
     */
    public function __construct()
    {
        $this->source = self::SOURCE_SPONTANEOUS;
        $this->contract = '';
        $this->comment = '';
        $this->agency = null;
        $this->job = '';
        $this->title = '';
        $this->cvFilename = '';
        $this->clFilename = '';

        $this->genders = array(
            self::GENDER_M,
            self::GENDER_F,
        );
        $this->sources = array(
            self::SOURCE_APEC,
            self::SOURCE_POLE_EMPLOI,
            self::SOURCE_CADRE_EMPLOI,
            self::SOURCE_REGION_JOB,
            self::SOURCE_GEOLID,
            self::SOURCE_SPONTANEOUS,
            self::SOURCE_BASE_VIVIER,
            self::SOURCE_COOPTATION,
            self::SOURCE_CVTHEQUE,
            self::SOURCE_CHASSE_DIRECTE,
            self::SOURCE_KELJOB,
            self::SOURCE_ECOLES,
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
     * Gender enum.
     *
     * @var array $genders All types of genders.
     */
    protected $genders;

    const GENDER_M = 'Monsieur';
    const GENDER_F = 'Madame';

    /**
     * Gender.
     *
     * @ORM\Column(name="genre",type="string")
     */
    protected $gender;

    /**
     * Set gender.
     *
     * @param string $gender
     * @return Application
     */
    public function setGender($gender)
    {
        // Enum check.
        if (!in_array($gender, $this->genders)) {
            throw new \InvalidArgumentException("Invalid gender");
        }
        $this->gender = $gender;
        return $this;
    }

    /**
     * Get gender.
     *
     * @return string
     */
    public function getGender()
    {
        return $this->gender;
    }

    /**
     * Firstname.
     *
     * @ORM\Column(name="prenom",type="string",length=255)
     * @Assert\NotBlank(groups={"apply"},message="firstname.blank")
     * @Assert\Length(
     *     groups={"apply"},
     *     min="2",minMessage="firstname.short",
     *     max="255",maxMessage="firstname.long"
     * )
     * @Assert\Regex(
     *     groups={"apply"},
     *     pattern="/[0-9\x22'`~,.;:\\[\]|{}()<>=_*\/+-]/",
     *     match=false,message="firstname.chars"
     * )
     * @var string
     */
    protected $firstname;

    /**
     * Set firstname.
     *
     * @param string $firstname
     * @return Application
     */
    public function setFirstname($firstname)
    {
        $this->firstname = $firstname;
        return $this;
    }

    /**
     * Get firstname.
     *
     * @return string
     */
    public function getFirstname()
    {
        return $this->firstname;
    }

    /**
     * Lastname.
     *
     * @ORM\Column(name="nom",type="string",length=255)
     * @Assert\NotBlank(groups={"apply"},message="lastname.blank")
     * @Assert\Length(
     *     groups={"apply"},
     *     min="2",minMessage="lastname.short",
     *     max="255",maxMessage="lastname.long"
     * )
     * @Assert\Regex(
     *     groups={"apply"},
     *     pattern="/[0-9\x22'`~,.;:\\[\]|{}()<>=_*\/+-]/",
     *     match=false,message="lastname.chars"
     * )
     * @var string
     */
    protected $lastname;

    /**
     * Set lastname.
     *
     * @param string $lastname
     * @return Application
     */
    public function setLastname($lastname)
    {
        $this->lastname = $lastname;
        return $this;
    }

    /**
     * Get lastname.
     *
     * @return string
     */
    public function getLastname()
    {
        return $this->lastname;
    }

    /**
     * Email.
     *
     * @ORM\Column(name="email",type="string",length=255)
     * @Assert\NotBlank(groups={"apply"},message="email.blank")
     * @Assert\Length(
     *     groups={"apply"},
     *     min="2",minMessage="email.short",
     *     max="255",maxMessage="email.long"
     * )
     * @Assert\Email(groups={"apply"},message="email.invalid")
     * @var string
     */
    protected $email;

    /**
     * Set email.
     *
     * @param string $email
     * @return Application
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

    /**
     * Phone.
     *
     * @ORM\Column(name="tel",type="string",length=32)
     * @Assert\NotBlank(groups={"apply"},message="phone.blank")
     * @Assert\Length(
     *     groups={"apply"},
     *     min="8",minMessage="phone.short",
     *     max="32",maxMessage="phone.long"
     * )
     * @var string
     */
    protected $phone;

    /**
     * Set phone.
     *
     * @param string $phone
     * @return Application
     */
    public function setPhone($phone)
    {
        $this->phone = $phone;
        return $this;
    }

    /**
     * Get phone.
     *
     * @return string
     */
    public function getPhone()
    {
        return $this->phone;
    }

    /**
     * Comment.
     *
     * @ORM\Column(name="commentaire",type="text")
     * @var string
     */
    protected $comment;

    /**
     * Set comment.
     *
     * @param string $comment
     * @return Application
     */
    public function setComment($comment)
    {
        $this->comment = $comment;
        return $this;
    }

    /**
     * Get comment.
     *
     * @return string
     */
    public function getComment()
    {
        return $this->comment;
    }

    /**
     * Source enum.
     *
     * @var array $sources All types of sources.
     */
    protected $sources;

    const SOURCE_APEC = 1;
    const SOURCE_POLE_EMPLOI = 2;
    const SOURCE_CADRE_EMPLOI = 3;
    const SOURCE_REGION_JOB = 4;
    const SOURCE_GEOLID = 5;
    const SOURCE_SPONTANEOUS = 6;
    const SOURCE_BASE_VIVIER = 7;
    const SOURCE_COOPTATION = 8;
    const SOURCE_CVTHEQUE = 9;
    const SOURCE_CHASSE_DIRECTE = 10;
    const SOURCE_KELJOB = 11;
    const SOURCE_ECOLES = 12;

    /**
     * Source.
     *
     * @ORM\Column(name="id_source",type="string")
     */
    protected $source;

    /**
     * Set source.
     *
     * @param string $source
     * @return Application
     */
    public function setSource($source)
    {
        // Enum check.
        if (!in_array($source, $this->sources)) {
            throw new \InvalidArgumentException("Invalid source");
        }
        $this->source = $source;
        return $this;
    }

    /**
     * Get source.
     *
     * @return string
     */
    public function getSource()
    {
        return $this->source;
    }

    /**
     * Contract.
     *
     * @ORM\Column(name="id_contrat",type="string")
     * @Assert\NotBlank(groups={"create"},message="contract.blank")
     * @var string
     */
    protected $contract;

    /**
     * Set contract.
     *
     * @param string $contract
     * @return Application
     */
    public function setContract($contract)
    {
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
     * Agency.
     *
     * @ORM\ManyToOne(targetEntity="\Geolid\JobBundle\Entity\Agency")
     * @ORM\JoinColumn(name="id_agence",referencedColumnName="id",nullable=true)
     */
    protected $agency;

    /**
     * Set agency
     *
     * @param \Geolid\JobBundle\Entity\Agency $agency
     * @return Application
     */
    public function setAgency(Agency $agency)
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
     * Job.
     *
     * @ORM\ManyToOne(targetEntity="\Geolid\JobBundle\Entity\Job")
     * @ORM\JoinColumn(name="id_job",referencedColumnName="id")
     */
    protected $job;

    /**
     * Set job
     *
     * @param string $job
     * @return Application
     */
    public function setJob($job)
    {
        $this->job = $job;
        return $this;
    }

    /**
     * Get job
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
     * @ORM\Column(name="intitule_poste",type="string")
     */
    protected $title;

    /**
     * Set title
     *
     * @param string $title
     * @return Application
     */
    public function setTitle($title)
    {
        $this->title = $title;
        return $this;
    }

    /**
     * Get title
     *
     * @return string
     */
    public function getTitle()
    {
        return $this->title;
    }

    /**
     * Date.
     *
     * @ORM\Column(name="date",type="integer")
     * @var string
     */
    protected $date;

    /**
     * Set date.
     *
     * @param string $date
     * @return Application
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
     * @ORM\PrePersist
     */
    public function setDateValue()
    {
        //$this->date = new DateTime();
        $this->date = time();
    }

    /**
     * Referer.
     *
     * @ORM\Column(name="referer",type="text")
     * @var string
     */
    protected $referer;

    /**
     * Set referer.
     *
     * @param string $referer
     * @return Application
     */
    public function setReferer($referer)
    {
        $this->referer = $referer;
        return $this;
    }

    /**
     * Get referer.
     *
     * @return string
     */
    public function getReferer()
    {
        return $this->referer;
    }

    /**
     * Curriculum vitae file.
     *
     * @Assert\File(
     *     groups={"apply"},
     *     maxSize="2M",
     *     mimeTypes={
     *         "application/msword",
     *         "application/octet-stream",
     *         "application/pdf",
     *         "application/vnd.oasis.opendocument.text",
     *         "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
     *         "application/x-pdf",
     *         "application/zip",
     *         "image/jpeg",
     *         "image/png"
     *     },
     *     maxSizeMessage="cv.big",
     *     mimeTypesMessage="cv.mime"
     * )
     * @Assert\NotBlank(groups={"apply"},message="cv.blank")
     * @Vich\UploadableField(mapping="job_cv",fileNameProperty="cvFilename")
     *
     * @var File $cv
     */
    protected $cv;

    /**
     * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile $cv
     */
    public function setCv(File $cv)
    {
        $this->cv = $cv;
    }

    /**
     * @return File
     */
    public function getCv()
    {
        return $this->cv;
    }

    /**
     * Curriculum vitae filename.
     *
     * @ORM\Column(name="cv",type="string",length=255)
     *
     * @var string $cvFilename
     */
    protected $cvFilename;

    /**
     * @param string $cvFilename
     */
    public function setCvFilename($cvFilename)
    {
        $this->cvFilename = $cvFilename;
    }

    /**
     * @return string
     */
    public function getCvFilename()
    {
        return $this->cvFilename;
    }

    /**
     * Cover letter file.
     *
     * @Assert\File(
     *     groups={"apply"},
     *     maxSize="2M",
     *     mimeTypes={
     *         "application/msword",
     *         "application/octet-stream",
     *         "application/pdf",
     *         "application/vnd.oasis.opendocument.text",
     *         "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
     *         "application/x-pdf",
     *         "application/zip",
     *         "image/jpeg",
     *         "image/png"
     *     },
     *     maxSizeMessage="cl.big",
     *     mimeTypesMessage="cl.mime"
     * )
     * @Assert\NotBlank(groups={"de"},message="cl.blank")
     * @Vich\UploadableField(mapping="job_cl",fileNameProperty="clFilename")
     *
     * @var File $cl
     */
    protected $cl;

    /**
     * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile $cl
     */
    public function setCl(File $cl)
    {
        $this->cl = $cl;
    }

    /**
     * @return File
     */
    public function getCl()
    {
        return $this->cl;
    }

    /**
     * Cover letter filename.
     *
     * @ORM\Column(name="lettre_motivation", type="string", length=255)
     *
     * @var string $clFilename
     */
    protected $clFilename;

    /**
     * @param string $clFilename
     */
    public function setClFilename($clFilename)
    {
        $this->clFilename = $clFilename;
    }

    /**
     * @return string
     */
    public function getClFilename()
    {
        return $this->clFilename;
    }

    /**
     * Certificates.
     *
     * @Assert\File(
     *     groups={"apply"},
     *     maxSize="5M",
     *     mimeTypes={
     *         "application/msword",
     *         "application/octet-stream",
     *         "application/pdf",
     *         "application/vnd.oasis.opendocument.text",
     *         "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
     *         "application/x-pdf",
     *         "application/zip",
     *         "image/jpeg",
     *         "image/png"
     *     },
     *     maxSizeMessage="certificates.big",
     *     mimeTypesMessage="certificates.mime"
     * )
     * @Assert\NotBlank(groups={"de"},message="certificates.blank")
     * @Vich\UploadableField(mapping="job_certificates",fileNameProperty="certificatesFilename")
     *
     * @var File $certificates
     */
    protected $certificates;

    /**
     * @param File|\Symfony\Component\HttpFoundation\File\UploadedFile $certificates
     */
    public function setCertificates(File $certificates)
    {
        $this->certificates = $certificates;
    }

    /**
     * @return File
     */
    public function getCertificates()
    {
        return $this->certificates;
    }

    /**
     * Cover letter filename.
     *
     * @ORM\Column(name="certificates", type="string", length=255)
     *
     * @var string $certificatesFilename
     */
    protected $certificatesFilename;

    /**
     * @param string $certificatesFilename
     */
    public function setCertificatesFilename($certificatesFilename)
    {
        $this->certificatesFilename = $certificatesFilename;
    }

    /**
     * @return string
     */
    public function getCertificatesFilename()
    {
        return $this->certificatesFilename;
    }
    
    /**
     * Zone.
     *
     * @ORM\Column(name="zone",type="string")
     */
    protected $zone;

    /**
     * Set zone.
     *
     * @param string $zone
     * @return Application
     */
    public function setZone($zone)
    {
        $this->zone = $zone;
        return $this;
    }

    /**
     * Get zone
     *
     * @return string
     */
    public function getZone()
    {
        return $this->zone;
    }

}
