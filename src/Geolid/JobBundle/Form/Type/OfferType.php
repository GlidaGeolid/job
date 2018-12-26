<?php
namespace Geolid\JobBundle\Form;

use Geolid\JobBundle\Entity\Agency;
use Geolid\JobBundle\Entity\Sector;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;





class OfferType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {    
        $builder
            ->add('sector')
            ->add('title')
            ->add('content')
        ;

    }

    public function setDefaultOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'GeolidJobBundle\Entity\Offer',
        ));
    }

    public function getName()
    {
        return 'geolid_job_bundle_offer';
    }
}
