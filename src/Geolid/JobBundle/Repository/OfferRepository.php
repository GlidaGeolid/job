<?php
namespace Geolid\JobBundle\Repository;

use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Query\ResultSetMapping;

/**
 * Offer Repository.
 */
class OfferRepository extends EntityRepository
{
    /**
     * Browse offers.
     */
    public function browse($params = array())
    {
        $query = $this->_em
            ->createQueryBuilder()
            ->select('o')
            ->from($this->_entityName, 'o')
            ->innerJoin('o.agency', 'a')
            // Careful o.online is an enum…
            ->andWhere('o.online = \'1\'')
            ->addOrderBy('o.date', 'DESC')
            ->addOrderBy('o.sector', 'ASC')
           ;
        if (isset($params['job'])) {
            $query = $query
                ->andWhere('o.job = :job')
                ->setParameter('job', $params['job'])
                ;
        }
        if (isset($params['sector'])) {
            $query = $query
                ->andWhere('o.sector = :sector')
                ->setParameter('sector', $params['sector'])
                ;
        }
        if (isset($params['agency'])) {
            $query = $query
                ->andWhere('a.name = :agency')
                ->setParameter('agency', $params['agency'])
                ;
        }
        if (isset($params['contract'])) {
            $query = $query
                ->andWhere('o.contract = :contract')
                ->setParameter('contract', $params['contract'])
                ;
        }
        $query = $query->getQuery();
        return $query->getResult();
    }

    /**
     * Find by country.
     */
    public function findByCountry($country)
    {
        $query = $this->_em
            ->createQueryBuilder()
            ->select('o, j')
            ->from($this->_entityName, 'o')
            ->innerJoin('o.job', 'j')
            // Careful o.online is an enum…
            ->andWhere('o.online = \'1\'')
            ->andWhere('o.country = :country')
            ->setParameter('country', $country)
            ->addOrderBy('o.date', 'DESC')
            ->getQuery();

        return $query->getResult();
    }

    /**
     * Get the n last offers.
     */
    public function lastn($country, $n = 3)
    {
        $query = $this->_em
            ->createQueryBuilder()
            ->select('o, j')
            ->from($this->_entityName, 'o')
            ->innerJoin('o.job', 'j')
            // Careful o.online is an enum…
            ->andWhere('o.online = \'1\'')
            ->andWhere('o.country = :country')
            ->setParameter('country', $country)
            ->addOrderBy('o.date', 'DESC')
            ->setMaxResults($n)
            ->getQuery();

        return $query->getResult();
    }

    /**
     * Get the users which asked for a notification.
     */
    public function recipients($id)
    {
        $sql = <<<SQL
            SELECT u.id, u.nom, u.prenom, u.email
FROM recrutement o
JOIN comptes_geolid_jobs_view u
WHERE
    FIND_IN_SET(u.id, o.alertes_mail)
    AND o.id = :id
SQL;

        $rsm = new ResultSetMapping($this->_em);
        $rsm
            ->addEntityResult('GeolidJobBundle:User', 'u')
            ->addFieldResult('u', 'id', 'id')
            ->addFieldResult('u', 'nom', 'name')
            ->addFieldResult('u', 'email', 'email')
            ;

        $query = $this->_em
            ->createNativeQuery($sql, $rsm)
            ->setParameter('id', $id)
            ;

        return $query->getResult();
    }

    /**
     * Get the offer with slug.
     */
    public function findSlug($slug)
    {
        $query = $this->_em
            ->createQueryBuilder()
            ->select('o')
            ->from($this->_entityName, 'o')
            // Careful o.online is an enum…
            ->andWhere('o.online = :online')
            ->andWhere('o.slug = :slug')
            ->addOrderBy('o.date', 'DESC')
            ->setParameter('online', '1')
            ->setParameter('slug', $slug)
            ->setMaxResults(1)
            ->getQuery();

        return $query->getOneOrNullResult();
    }
}
