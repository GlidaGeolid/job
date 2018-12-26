<?php
namespace Geolid\JobBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class GenderType extends AbstractType
{
    /**
     * Gender enum. 
     */
    const GENDER_M = 'Monsieur';
    const GENDER_F = 'Madame';

    public function setDefaultOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'choices' => array(
                self::GENDER_M => 'apply.form.gender.male',
                self::GENDER_F => 'apply.form.gender.female',
            ),
            'data' => self::GENDER_M,
            'expanded' => true,
            'label' => 'apply.form.gender.label',
            'multiple' => false,
        ));
    }

    public function getParent()
    {
        return ChoiceType::class;
    }

    public function getName()
    {
        return 'job_gender';
    }
}
