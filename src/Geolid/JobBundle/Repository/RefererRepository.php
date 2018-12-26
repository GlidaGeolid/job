<?php
namespace Geolid\JobBundle\Repository;

use Doctrine\ORM\EntityRepository;

/**
 * Referer Repository.
 */
class RefererRepository extends EntityRepository
{
    public function findOneByRefererOrCreate($referer)
    {
        $entity = $this->findOneByReferer($referer);

        if ($entity === null)
        {
            $entity = new $this->_entityName;
            $entity->setReferer($referer);
            $this->_em->persist($entity);
            $this->_em->flush();
        }

        return $entity;
    }
}
