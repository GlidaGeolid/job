<?php
namespace Geolid\JobBundle\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * Job Repository.
 */
class JobRepository extends EntityRepository
{
    /**
     * Get published jobs from/and published categories.
     */
    public function listJobsByCategories($country)
    {
        $query = $this->_em
            ->createQueryBuilder()
            ->select('j, c')
            ->from($this->_entityName, 'j')
            ->innerJoin('j.category', 'c')
            ->andWhere('j.country = :country')
            ->andWhere('j.status = \'published\'')
            ->andWhere('c.status = \'published\'')
            ->setParameter('country', $country)
           ;

        $query = $query->getQuery();
        return $query->getResult();
    }

    /**
     * Get published jobs from/and published sectors for display
     * in select with optgroups.
     */
    public function listJobsBySectorsOpt($country)
    {
        $jobsBySectors = array();
        $jobs = $this->_em
            ->createQueryBuilder()
            ->select('j, s')
            ->from($this->_entityName, 'j')
            ->innerJoin('j.sector', 's')
            //->andWhere('j.status = \'published\'')
            ->andWhere('j.country = :country')
            ->setParameter('country', $country)
            ->getQuery()
            ->getResult()
            ;

        foreach ($jobs as $job) {
            $jobsBySectors[$job->getSector()->getName()][$job->getId()] = $job;
        }

        return $jobsBySectors;
    }
}
