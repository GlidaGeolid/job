<?php
namespace Geolid\JobBundle\Twig\Extension;

use Geolid\JobBundle\Entity\Offer;
use Twig_Extension;
use Twig_SimpleFilter;

class ContractExtension extends Twig_Extension
{
    public function getFilters()
    {
        return array(
            new Twig_SimpleFilter('contract', array($this, 'contractFilter')),
        );
    }

    public function contractFilter($number)
    {
        $contracts = array(
            '' => 'contract.all',
            Offer::CONTRACT_CDI => 'contract.cdi',
            Offer::CONTRACT_CDD => 'contract.cdd',
            Offer::CONTRACT_STAGE => 'contract.stage',
            Offer::CONTRACT_ALTERNANCE => 'contract.alternance',
        );
        return $contracts[$number];
    }

    public function getName()
    {
        return 'job_contract_twig';
    }
}
