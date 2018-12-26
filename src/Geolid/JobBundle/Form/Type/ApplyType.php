<?php

namespace Geolid\JobBundle\Form\Type;

use Doctrine\ORM\EntityRepository;
use Geolid\JobBundle\Entity\Application;
use Geolid\JobBundle\Form\Type\JobType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\OptionsResolver\ResolverInterface;
use Symfony\Component\Validator\Constraints\True;

/**
 * Apply Form Type.
 */
class ApplyType extends AbstractType
{
    /** @var ContainerInterface $container */
    private $container;

    /** @var EntityRepository $er */
    protected $er;

    /**
     * @param EntityRepository $er
     * @param ContainerInterface $container
     */
    public function __construct($er, $container){
        $this->er = $er;
        $this->container = $container;
    }

    /**
     * @inherit
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $country = $this->container->get('country');

        $isClRequired = false;
        if (in_array($country, array('de'))) {
            $isClRequired = true;
        }

        $builder
            ->add('gender', 'choice', array(
                'choices' => array(
                    'apply.form.gender.male'=>Application::GENDER_M ,
                    'apply.form.gender.female'=>Application::GENDER_F,
                ),
                'expanded' => true,
                'label' => 'apply.form.gender.label',
                'multiple' => false,
            ))
            ->add('firstname', 'text', array(
                'label' => 'apply.form.firstname',
            ))
            ->add('lastname', 'text', array(
                'label' => 'apply.form.lastname',
            ))
            ->add('source', 'choice', array(
                'choices' => array(
                    'apply.form.source.geolid'=> Application::SOURCE_GEOLID,
                    'apply.form.source.spontaneous'=>Application::SOURCE_SPONTANEOUS,

                ),
                'expanded' => true,
                'label' => 'apply.form.source.title',
                'multiple' => false,
            ))
            ->add('offer', 'entity', array(
                'attr' => array(
                    'data-source' => Application::SOURCE_GEOLID,
                    'data-abide-validator' => 'requiredBySource',
                ),
                'class' => 'GeolidJobBundle:Offer',
                'empty_data' => 'apply.form.empty.offer',
                'label' => 'apply.form.offer',
                'mapped' => false,
                'query_builder' => function(EntityRepository $er) use ($country) {
                    return $er
                        ->createQueryBuilder('o')
                        // Carefull, the online field is an enum…
                        ->andWhere('o.online = \'1\'')
                        ->andWhere('o.country = :country')
                        ->orderBy('o.sector', 'ASC')
                        ->setParameter('country', $country)
                        ;
                },
                'required' => false,
            ))
            ->add("job", "entity", array(
                'attr' => array(
                    'data-source' => Application::SOURCE_SPONTANEOUS,
                    'data-abide-validator' => 'requiredBySource',
                ),
                'choices' => $this->jobsBySectorsOpt($country),
                'class' => 'GeolidJobBundle:Job',
                'empty_data' => 'apply.form.empty.job',
                'label' => 'apply.form.job',
                'required' => false,
            ))
            ->add('email', null, array(
                'label' => 'apply.form.email',
            ))
            ->add('phone', null, array(
                'label' => 'apply.form.phone',
            ))
            ->add('cv', 'file', array(
                'attr' => array(
                    'accept' => join(',', array(
                        'application/msword',
                        'application/octet-stream',
                        'application/pdf',
                        'application/vnd.oasis.opendocument.text',
                        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                        'application/x-pdf',
                        'application/zip',
                        'image/jpeg',
                        'image/png',
                    )),
                ),
                'label' => 'apply.form.cv',
                'required' => true,
            ))
            ->add('cl', 'file', array(
                'attr' => array(
                    'accept' => join(',', array(
                        'application/msword',
                        'application/octet-stream',
                        'application/pdf',
                        'application/vnd.oasis.opendocument.text',
                        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                        'application/x-pdf',
                        'application/zip',
                        'image/jpeg',
                        'image/png',
                    )),
                ),
                'label' => 'apply.form.cl',
                'required' => $isClRequired,
            ))
            ;

        if (in_array($country, array('de'))) {
            $accepted = new True();
            $accepted->message = $this->container->get("translator")->trans('privacy.true', array(), 'validators');
            $builder
                ->add('certificates', 'file', array(
                    'attr' => array(
                        'accept' => join(',', array(
                            'application/msword',
                            'application/octet-stream',
                            'application/pdf',
                            'application/vnd.oasis.opendocument.text',
                            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                            'application/x-pdf',
                            'application/zip',
                            'image/jpeg',
                            'image/png',
                        )),
                    ),
                    'label' => 'apply.form.certificates',
                    'required' => true,
                ))
                ->add('privacy', 'checkbox', array(
                    'label' => 'apply.form.privacy',
                    'mapped' => false,
                    //'required' => true,
                    'constraints' => array(
                        $accepted
                    ),
                ))
            ;
        }
    }

    /**
     * @inherit
     */
    public function getName()
    {
        return 'job_apply';
    }

    /**
     * Currently sectors are not translated in database,
     * so we hook this stuff.
     */
    public function jobsBySectorsOpt($country) {
        $data = $this->er->listJobsBySectorsOpt($country);
        foreach ($data as $sector => $job) {
            $translatable = 'offer.sector.' . strtolower(preg_replace('/ /', '_', $sector));
            $data[$translatable] = $job;
            unset($data[$sector]);
        }
        return $data;
    }

    /**
     * @inherit
     */
    public function setDefaultOptions(OptionsResolver $resolver)
    {
        $resolver
            ->setDefaults(array(
                'csrf_protection' => false,
                'data_class' => 'Geolid\JobBundle\Entity\Application',
                'intention' => 'apply',
                'validation_groups' => function (FormInterface $form) {
                    $groups = array('apply', 'Default');
                    $country = $this->container->get('country');
                    array_push($groups, $country);
                    return $groups;
                },
            ));
    }

}
