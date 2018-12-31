<?php
namespace Geolid\JobBundle\Form\Type;

use Doctrine\ORM\EntityRepository;
use Geolid\JobBundle\Entity\Application;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Geolid\JobBundle\Entity\Offer;






class OfferFilterType extends AbstractType
{

    protected $er;


    public function __construct($er){
        $this->er = $er;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('sector', 'entity', array(
                'class' => 'GeolidJobBundle:Sector',
                'empty_data' => '',
                'required' => false,
            ))
            ->add("job", "entity", array(
                'class' => 'GeolidJobBundle:Job',
                'empty_data' => '',
                'required' => false,
                "choices" => $this->er->listJobsBySectorsOpt($options['country']),
             ))
            /**
             * There are fake/meta agencies that we need to remove from the list.
             * ie. "Grands Comptes" and "Mediapost"
             */
            ->add('agency', 'entity', array(
                'class' => 'Geolid\JobBundle\Entity\Agency',
                'empty_data' => '',
                'query_builder' => function(EntityRepository $er) {
                    return $er->createQueryBuilder('a')
                        ->andWhere('a.name NOT IN (\'Grands Comptes\', \'Mediapost\')')
                        ;
                },
                'choice_label' => 'name',
                'required' => false,
            ))

            ->add('contract', 'choice',  array('choices' => array(
                'contract.cdi'=>1 ,
                'contract.cdd'=>  2,
                'contract.stage'=> 3,
                'contract.alternance' =>4,
            ),
                'empty_data' => '',
                'required' => false,
            ))
        ;
    }

    public function getName()
    {
        return 'job_offer_filter';
    }


    public function configureOptions(OptionsResolver $resolver)
    {

        $resolver
            ->setDefaults(array(
                'country' => 'fr',
                'data_class' => 'Geolid\JobBundle\Form\Model\OfferFilter',
                'intention' => 'filter offers',
            ))
            ->setRequired(array('country'))
            ;
    }
}
