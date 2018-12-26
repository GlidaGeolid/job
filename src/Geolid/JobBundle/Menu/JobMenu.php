<?php
namespace Geolid\JobBundle\Menu;

use Doctrine\ORM\EntityManager;
use Knp\Menu\FactoryInterface;
use Knp\Menu\Iterator\CurrentItemFilterIterator;
use Knp\Menu\Iterator\RecursiveItemIterator;
use Knp\Menu\Matcher\Matcher;
use Knp\Menu\MenuItem;
use Knp\Menu\Util\MenuManipulator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;

/**
 * Job Menu.
 */
class JobMenu
{
    /** @var ContainerInterface $factory */
    private $container;

    /** @var FactoryInterface $factory */
    private $factory;

    /**
     * Constructor.
     *
     * @param FactoryInterface $factory
     * @param ContainerInterface $container
     */
    public function __construct(
        FactoryInterface $factory,
        ContainerInterface $container
    ) {
        $this->factory = $factory;
        $this->container = $container;
    }

    /**
     * General breadcrumb.
     * Like the main menu but with all items children of the home.
     */
    public function breadcrumb(RequestStack $requestStack)
    {
        $country = $this->container->get('country');
        $menu = $this->factory->createItem('root');
        $main = $this->main($requestStack)->copy();

        $home = $main->getChild('menu.home');
        if ($home) {
            $home->setParent(null);
            $main->removeChild('menu.home');
            $menu->addChild($home);
        }
        else {
            $home = $menu->addChild('menu.home', array(
                'route' => 'job_home',
                'routeParameters' => array('country' => $country)
            ));
        }

        $children = $main->getChildren();

        foreach ($children as $child) {
            $child->setParent($home);
        }
        $home->setChildren($children);

        return $menu;
    }

    /**
     * Testing.
     * To get rid of the cnerta bundle, I'm trying to return
     * a breadcrumb of an existing menu.
     * I think that MenuManipulator is not a good solution
     * since it returns an array and not a menu.
     * Next try is to use iterators.
     * After this, we can remove the cnerta bundle.
     *
     * https://github.com/KnpLabs/KnpMenuBundle/issues/194
     *
     * @param \Knp\Menu\FactoryInterface $factory
     * @param array $options
     *
     * @return \Knp\Menu\Iterator\CurrentItemFilterIterator
     */
    public function breadcrumb2(RequestStack $requestStack)
    {
        $request = $requestStack->getCurrentRequest();
        $em = $this->container->get('doctrine')->getManager();

        $menu = $this->factory->createItem('root');
        $menu->addChild('menu.home', array('route' => 'job_home'));
        $menu->addChild('menu.job', array('route' => 'job_jobs'));
        switch ($request->get('_route')) {

        case 'job_job':
            $slug = $request->get('slug');
            $menu['menu.job']->addChild($this->getJobTitle($em, $slug), array(
                'route' => 'job_job',
                'routeParameters' => array('slug' => $slug),
            ))
                ;
        }

        /* https://github.com/KnpLabs/KnpMenu/blob/master/src/Knp/Menu/Util/MenuManipulator.php
           pourquoi pas recopier ça sauf qu'on renvoie un menu ?
           */
        $manipulator = new \Knp\Menu\Util\MenuManipulator();
        return $manipulator->getBreadcrumbsArray($menu);
//
//        return $menu;
//
//        /* @var $matcher \Knp\Menu\Matcher\Matcher */
//        //$matcher = $this->container->get('knp_menu.matcher');
//
//        $treeIterator = new \RecursiveIteratorIterator(
//            new RecursiveItemIterator(
//                new \ArrayIterator(array($menu))
//            ), RecursiveIteratorIterator::SELF_FIRST
//        );
//
//        $iterator = new CurrentItemFilterIterator($treeIterator, $matcher);
//
//        // Set Current as an empty Item in order to avoid exceptions on knp_menu_get
//        $current = new MenuItem('', $this->factory);
//
//        //test
//        $current = $this->factory->createItem('root');
//
//        foreach ($iterator as $item) {
//            $item->setCurrent(true);
//            $current = $item;
//            break;
//        }
//
//        return $current;
    }

    /**
     * Main menu.
     * Was supposed to be used by all countries.
     */
    public function main(RequestStack $requestStack)
    {
        $request = $requestStack->getCurrentRequest();
        $em = $this->container->get('doctrine')->getManager();

        $country = $this->container->get('country');
        switch ($country) {
            case "de":
                return $this->mainDE();
                break;
            case "uk":
                return $this->mainUK();
                break;
            default:
                break;
        }

        $route = $request->get('_route');

        $menu = $this->factory->createItem('root');
        $menu->setChildrenAttribute('class', '');

        $home = $menu->addChild('menu.home', array(
            'route' => 'job_home',
            'routeParameters' => array('country' => $country)
        ));

        $enterprise = $menu->addChild('menu.enterprise', array(
            'route' => 'job_enterprise',
            'routeParameters' => array('country' => $country)
        ));

        $offers = $menu->addChild('menu.offers', array(
            'route' => 'job_offers',
            'routeParameters' => array('country' => $country)
        ));
        if ($route == 'job_offer') {
            $agency = $request->get('agency');
            $slug = $request->get('slug');
            $offers->addChild($this->getOfferTitle($em, $slug), array(
                'route' => 'job_offer',
                'routeParameters' => array(
                    'agency' => $agency,
                    'country' => $country,
                    'slug' => $slug
                )
            ));
        }
        else {
            $offers->addChild('menu.offer', array(
                'route' => 'job_offer',
                'routeParameters' => array(
                    'agency' => $request->get('agency', 'NA'),
                    'country' => $country,
                    'slug' => $request->get('slug', 'NA')
                )
            ));
        }
        $advice = $offers->addChild('menu.advice', array(
            'route' => 'job_advice',
            'routeParameters' => array('country' => $country)
        ));

        $jobs = $menu->addChild('menu.jobs', array(
            'route' => 'job_jobs',
            'routeParameters' => array('country' => $country)
        ));
        if ($route == 'job_job') {
            $slug = $request->get('slug');
            $jobs->addChild($this->getJobTitle($em, $slug), array(
                'route' => 'job_job',
                'routeParameters' => array(
                    'country' => $country,
                    'slug' => $slug
                )
            ));
        }
        else {
            $jobs->addChild('menu.job', array(
                'route' => 'job_job',
                'routeParameters' => array(
                    'country' => $country,
                    'slug' => $request->get('slug', 'NA'),
                )
            ));
        }
        $trainee = $jobs->addChild('menu.trainee', array(
            'route' => 'job_trainee',
            'routeParameters' => array('country' => $country)
        ));

        $apply = $menu
            ->addChild('menu.apply', array(
                'route' => 'job_apply',
                'routeParameters' => array('country' => $country)
            ))
            ->setLinkAttribute('class', 'button')
            ->setAttribute('class', 'has-form')
            ;
        $apply->addChild('menu.apply_thanks', array(
            'route' => 'job_apply_thanks',
            'routeParameters' => array('country' => $country)
        ));

        return $menu;
    }

    /**
     * Mobile menu.
     */
    public function mobile(RequestStack $requestStack)
    {
        $menu = $this->main($requestStack);
        $menu->setChildrenAttribute('class', 'off-canvas-list text-center');
        return $menu;
    }

    /**
     * Main menu uk.
     */
    public function mainUK()
    {
        $menu = $this->factory->createItem('root');
        $menu->setChildrenAttribute('class', '');

        $applyUkPdfUrl = $this->container->getParameter('geolid_job.apply_uk_pdf_url');

        $apply = $menu
            ->addChild('menu.apply')
            ->setUri($applyUkPdfUrl)
            ->setLinkAttribute('class', 'button')
            ->setAttribute('class', 'has-form')
            ;

        return $menu;
    }

    /**
     * Main menu de.
     */
    public function mainDE()
    {
        $menu = $this->factory->createItem('root');
        $menu->setChildrenAttribute('class', '');

        /*
        $home = $menu->addChild('menu.home', array(
            'route' => 'job_home',
            'routeParameters' => array('country' => 'de')
        ));
        */

        $apply = $menu
            ->addChild('menu.apply', array(
                'route' => 'job_apply',
                'routeParameters' => array('country' => 'de')
            ))
            ->setLinkAttribute('class', 'button')
            ->setAttribute('class', 'has-form')
            ;
        $apply->addChild('menu.apply_thanks', array(
            'route' => 'job_apply_thanks',
            'routeParameters' => array('country' => 'de')
        ));
        $apply->addChild('menu.advice', array(
            'route' => 'job_advice',
            'routeParameters' => array('country' => 'de')
        ));
        $apply->addChild('menu.privacy', array(
            'route' => 'job_privacy',
            'routeParameters' => array('country' => 'de')
        ));

        return $menu;
    }

    /**
     * Get a job title from it's slug.
     */
    public function getJobTitle($em, $slug) {
        $repository = $em->getRepository('GeolidJobBundle:Job');
        $job = $repository->findOneBySlug($slug);
        if (!$job) {
            return null;
        }
        return $job->getTitle();
    }

    /**
     * Get a offer title from it's slug.
     */
    public function getOfferTitle($em, $slug) {
        $repository = $em->getRepository('GeolidJobBundle:Offer');
        $offer = $repository->findOneBySlug($slug);
        if (!$offer) {
            return null;
        }
        return $offer->getTitle();
    }

    /**
     * Browse international sites.
     */
    public function international(EntityManager $em, Request $request, Matcher $matcher)
    {
        $menu = $this->factory->createItem('root');
        $menu->setChildrenAttribute('class', 'international-menu');
        /*$menu->addChild('Deutschland', array(
            'route' => 'job_home',
            'routeParameters' => array('country' => 'de'),
            'routeAbsolute' => true,
        ));
        $menu->addChild('France', array(
            'route' => 'job_home',
            'routeParameters' => array('country' => 'fr'),
            'routeAbsolute' => true,
        ));

        $menu->addChild('España', array(
            'route' => 'job_home',
            'routeParameters' => array('country' => 'es'),
            'routeAbsolute' => true,
        ));
        $menu->addChild('Italia', array(
            'route' => 'job_home',
            'routeParameters' => array('country' => 'it'),
            'routeAbsolute' => true,
        ));
        $menu->addChild('United Kingdom', array(
            'route' => 'job_home',
            'routeParameters' => array('country' => 'uk'),
            'routeAbsolute' => true,
        ));
        */

        $host = $request->getHost();
        $voter = new HostVoter($host);
        $matcher->addVoter($voter);
        $treeIterator = new \RecursiveIteratorIterator(
            new RecursiveItemIterator(
                new \ArrayIterator(array($menu))
            )
        );
        $iterator = new CurrentItemFilterIterator($treeIterator, $matcher);
        return $menu;
    }
}
