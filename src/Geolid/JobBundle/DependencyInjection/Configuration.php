<?php
namespace Geolid\JobBundle\DependencyInjection;

use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

/**
 * Configuration.
 */
class Configuration implements ConfigurationInterface
{
    public function getConfigTreeBuilder()
    {
        $treeBuilder = new TreeBuilder();
        $rootNode = $treeBuilder->root('geolid_job');

        $rootNode
            ->children()
                ->scalarNode('applications_path')
                    ->isRequired()
                    ->cannotBeEmpty()
                ->end()
            ->end()
            ->children()
                ->scalarNode('applications_url')
                    ->isRequired()
                    ->cannotBeEmpty()
                ->end()
            ->end()
            ->children()
                ->scalarNode('apply_uk_pdf_url')
                    ->isRequired()
                    ->cannotBeEmpty()
                ->end()
            ->end()
            ->children()
                ->arrayNode('countries')
                ->isRequired()
                ->requiresAtLeastOneElement()
                ->prototype('scalar')->end()
                ->end()
            ->end()
            ->children()
                ->scalarNode('domain')
                    ->isRequired()
                    ->cannotBeEmpty()
                ->end()
            ->end()
            ->children()
                ->scalarNode('from_email')
                    ->isRequired()
                    ->cannotBeEmpty()
                ->end()
            ->end()
            ->children()
                ->scalarNode('from_name')
                    ->isRequired()
                    ->cannotBeEmpty()
                ->end()
            ->end()
            ->children()
                ->scalarNode('news_base_url')
                    ->isRequired()
                    ->cannotBeEmpty()
                ->end()
            ->end()
            ->children()
                ->scalarNode('news_end_url')
                    ->isRequired()
                    ->cannotBeEmpty()
                ->end()
            ->end()
            ->children()
                ->arrayNode('notifications')
                    ->prototype('array')
                        ->prototype('scalar')
                        ->end()
                    ->end()
                ->end()
            ->end()
            ->children()
                ->scalarNode('offers_europe_pdf_url')
                    ->isRequired()
                    ->cannotBeEmpty()
                ->end()
            ->end()
            ->children()
                ->scalarNode('rh_manager_url')
                    ->isRequired()
                    ->cannotBeEmpty()
                ->end()
            ->end()
            ->children()
                ->scalarNode('testimonial_base_url')
                    ->isRequired()
                    ->cannotBeEmpty()
                ->end()
            ->end()
            ->children()
                ->scalarNode('legacy_api_base_url')
                    ->isRequired()
                    ->cannotBeEmpty()
                ->end()
            ->end()
            ;

        return $treeBuilder;
    }
}
