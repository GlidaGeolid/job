<?php
namespace Geolid\JobBundle\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * Post Repository.
 */
class PostRepository extends EntityRepository
{
    /**
     *
     */
    public function lastn($n = 3, $params = array())
    {
        $query = $this->_em
            ->createQueryBuilder()
            ->select('p')
            ->from($this->_entityName, 'p')
            ->andWhere('p.published = 1')
            ->orderBy('p.date', 'DESC')
            ->setMaxResults($n)
            ->getQuery();

        return $query->getResult();
    }
}
