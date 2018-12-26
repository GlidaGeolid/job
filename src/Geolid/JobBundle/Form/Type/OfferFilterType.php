<?php
namespace Geolid\JobBundle\Form\Type;

use Doctrine\ORM\EntityRepository;
use Geolid\JobBundle\Entity\Application;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
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
                'empty_data' => 'offers.empty.sector',
                'required' => false,
            ))
            ->add("job", "entity", array(
                'class' => 'GeolidJobBundle:Job',
                'empty_data' => 'offers.empty.job',
                'required' => false,
                "choices" => $this->er->listJobsBySectorsOpt($options['country']),
             ))
            /**
             * There are fake/meta agencies that we need to remove from the list.
             * ie. "Grands Comptes" and "Mediapost"
             */
            ->add('agency', 'entity', array(
                'class' => 'Geolid\JobBundle\Entity\Agency',
                'empty_data' => 'offers.empty.agency',
                'query_builder' => function(EntityRepository $er) {
                    return $er->createQueryBuilder('a')
                        ->andWhere('a.name NOT IN (\'Grands Comptes\', \'Mediapost\')')
                        ;
                },
                'choice_label' => 'name',
                'required' => false,
            ))
//            ->add('contract', 'choice', array('choices' => array(
//                'contract.cdi'=>Application::CONTRACT_CDI ,
//                'contract.cdd'=>  Application::CONTRACT_CDD,
//                'contract.stage'=> Application::CONTRACT_STAGE,
//                'contract.alternance' => Application::CONTRACT_ALTERNANCE,
//            ),
//                'empty_data' => 'contract.empty',
////                'required' => false,
//            ))
//            ;
            ->add('contract', 'choice',  array('choices' => array(
                'contract.cdi'=>ContractType::CONTRACT_CDI ,
                'contract.cdd'=>  ContractType::CONTRACT_CDD,
                'contract.stage'=> ContractType::CONTRACT_STAGE,
                'contract.alternance' =>ContractType::CONTRACT_ALTERNANCE,
            ),
                'empty_data' => 'contract.empty',
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
