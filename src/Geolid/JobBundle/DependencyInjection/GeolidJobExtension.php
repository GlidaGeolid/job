<?php
namespace Geolid\JobBundle\DependencyInjection;

use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;
use Symfony\Component\HttpKernel\DependencyInjection\Extension;

/**
 * Extension.
 */
class GeolidJobExtension extends Extension
{
    public function load(array $configs, ContainerBuilder $container)
    {
        $configuration = new Configuration();
        $config = $this->processConfiguration($configuration, $configs);

        $container->setParameter('geolid_job.applications_path', $config['applications_path']);
        $container->setParameter('geolid_job.applications_url', $config['applications_url']);
        $container->setParameter('geolid_job.apply_uk_pdf_url', $config['apply_uk_pdf_url']);
        $container->setParameter('geolid_job.countries', $config['countries']);
        $container->setParameter('geolid_job.domain', $config['domain']);
        $container->setParameter('geolid_job.from_email', $config['from_email']);
        $container->setParameter('geolid_job.from_name', $config['from_name']);
        $container->setParameter('geolid_job.news_base_url', $config['news_base_url']);
        $container->setParameter('geolid_job.news_end_url', $config['news_end_url']);
        $container->setParameter('geolid_job.notifications', $config['notifications']);
        $container->setParameter('geolid_job.offers_europe_pdf_url', $config['offers_europe_pdf_url']);
        $container->setParameter('geolid_job.rh_manager_url', $config['rh_manager_url']);
        $container->setParameter('geolid_job.testimonial_base_url', $config['testimonial_base_url']);
        $container->setParameter('geolid_job.legacy_api_base_url', $config['legacy_api_base_url']);

        $loader = new YamlFileLoader($container, new FileLocator(__DIR__.'/../Resources/config'));
        $loader->load('services.yml');
    }

    public function getAlias()
    {
        return 'geolid_job';
    }
}
