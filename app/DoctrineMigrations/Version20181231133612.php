<?php

namespace Application\Migrations;

use Doctrine\DBAL\Migrations\AbstractMigration;
use Doctrine\DBAL\Schema\Schema;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
class Version20181231133612 extends AbstractMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        $this->abortIf($this->connection->getDatabasePlatform()->getName() != 'mysql', 'Migration can only be executed safely on \'mysql\'.');
        $this->addSql(" DELETE from geolid.job_job WHERE
                                         job_job.slug='directeurdirectrice-de-region'
                                      or job_job.slug='manager-commercial'
                                      or job_job.slug='conseiller-clientele'
                                      or job_job.slug='superviseur-service-client'
                                      or job_job.slug='conseiller-clientele-retention-hf'
                                      or job_job.slug='responsable-des-operations-de-production-web'
                                      or job_job.slug='chargee-de-seo-'
                                      or job_job.slug='community-manager'
                                      or job_job.slug='editorialiste'
                                      or job_job.slug='charge-de-web-marketing'
                                      or job_job.slug='charge-de-trade-marketing';");



        $this->addSql( "UPDATE geolid.job_job SET category_id= '3'
            WHERE slug='directeur-customer-success-' ;");

    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}
