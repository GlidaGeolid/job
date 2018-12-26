<?php
namespace Geolid\JobBundle\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * Testimonial Repository.
 */
class TestimonialRepository extends EntityRepository
{
    /**
     * Load and order testimonials.
     */
    public function loadOrder($ids = array())
    {
        $query = $this->_em
            ->createQueryBuilder()
            ->select('t, FIELD(t.id, ' . implode(',', $ids) . ') AS HIDDEN field')
            ->from($this->_entityName, 't')
            ->andWhere('t.id IN (:ids)')
            ->orderBy('field')
            ->setParameter('ids', $ids)
            ->getQuery();

        return $query->getResult();
    }
}
