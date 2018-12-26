<?php
namespace Geolid\JobBundle\Form\Type;

use Geolid\JobBundle\Entity\Offer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class ContractType extends AbstractType
{
    const CONTRACT_CDI ='contract.cdi';
    const CONTRACT_CDD = 'contract.cdd';
    const CONTRACT_STAGE = 'contract.stage';
    const CONTRACT_ALTERNANCE = 'contract.alternance';
    public function setDefaultOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'choices' => array(
                Offer::CONTRACT_CDI => 'contract.cdi',
                Offer::CONTRACT_CDD => 'contract.cdd',
                Offer::CONTRACT_STAGE => 'contract.stage',
                Offer::CONTRACT_ALTERNANCE => 'contract.alternance',
            ),
            'empty_data' => 'contract.empty',
            'required' => false,
        ));
    }

    public function getParent()
    {
        return ChoiceType::class;
    }

    public function getName()
    {
        return 'job_contract';
    }
}
