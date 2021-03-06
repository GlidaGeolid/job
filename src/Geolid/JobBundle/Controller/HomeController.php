<?php
namespace Geolid\JobBundle\Controller;

use Geolid\JobBundle\Entity\Offer;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * Home Controller.
 */
class HomeController extends Controller
{
    /**
     * @Route(
     *     "/conseils",
     *     name="job_advice",
     *     host="{country}.{domain}",
     *     requirements={"country": "de|fr", "domain":"%geolid_job.domain%"},
     *     defaults={"country": "fr", "domain":"%geolid_job.domain%"}
     * )
     */
    public function adviceFrAction($country)
    {
        $em = $this->getDoctrine()->getManager();
        $internationalRepository = $em->getRepository('GeolidJobBundle:International');

        if ($country == 'fr') {
            $fr = $internationalRepository->findOneByCountry('fr');
            $config = $fr->getConfig();
        } elseif ($country == 'de') {
            $de = $internationalRepository->findOneByCountry('de');
            $config = $de->getConfig();
        }

        return $this->render('GeolidJobBundle:Home:advice.'.$country.'.html.twig', array(
            'config' => $config,
        ));
    }

    /**
     * @Route(
     *     "/entreprise",
     *     name="job_enterprise",
     *     host="{country}.{domain}",
     *     requirements={"country": "fr", "domain":"%geolid_job.domain%"},
     *     defaults={"country": "fr", "domain":"%geolid_job.domain%"}
     * )
     */
    public function enterpriseFrAction($country)
    {
        $em = $this->getDoctrine()->getManager();
        $internationalRepository = $em->getRepository('GeolidJobBundle:International');

        $fr = $internationalRepository->findOneByCountry('fr');
        $config = $fr->getConfig();

        $offersEuropePdfUrl = $this->container->getParameter('geolid_job.offers_europe_pdf_url');

        return $this->render('GeolidJobBundle:Home:enterprise.'.$country.'.html.twig', array(
            'offers_europe_pdf_url' => $offersEuropePdfUrl,
            'config' => $config,
        ));
    }

    /**
     * @Route(
     *     "/stagiaires",
     *     name="job_trainee",
     *     host="{country}.{domain}",
     *     requirements={"country": "fr", "domain":"%geolid_job.domain%"},
     *     defaults={"country": "fr", "domain":"%geolid_job.domain%"}
     * )
     */
    public function traineeFrAction($country)
    {
        $em = $this->getDoctrine()->getManager();
        $offerRepository = $em->getRepository('GeolidJobBundle:Offer');
        $internationalRepository = $em->getRepository('GeolidJobBundle:International');
        $testimonialRepository = $em->getRepository('GeolidJobBundle:Testimonial');

        $offers = $offerRepository->findBy(
            array(
                'contract' => Offer::CONTRACT_STAGE,
                'online' => '1'
            ),
            array('date' => 'ASC'),
            3
        );

        $fr = $internationalRepository->findOneByCountry('fr');
        $config = $fr->getConfig();

        $testimonialsIds = array(
            $config->trainee->testimonial1_id,
            $config->trainee->testimonial2_id,
            $config->trainee->testimonial3_id,
        );
        $testimonialsIds = array_filter($testimonialsIds, 'strlen');
        $testimonials = empty($testimonialsIds) ? [] : $testimonialRepository->loadOrder($testimonialsIds);

        $testimonialBaseUrl = $this->container->getParameter('geolid_job.testimonial_base_url');

        return $this->render('GeolidJobBundle:Home:trainee.'.$country.'.html.twig', array(
            'config' => $config,
            'offers' => $offers,
            'testimonials' => $testimonials,
            'testimonial_base_url' => $testimonialBaseUrl,
        ));
    }

    /**
     * @Route("/mentions-legales", name="mentions_legales")
     */
    public function mentionsLegalesAction()
    {
        return $this->render('GeolidJobBundle:Home:mentions-legales.html.twig', array(
            'noindex' => true
        ));
    }

    /**
     * @Route("/privacy-and-confidentiality", name="privacy_and_confidentiality")
     */
    public function privacyAndConfidentialityAction()
    {
        return $this->render('GeolidJobBundle:Home:privacy-and-confidentiality.html.twig', array(
            'noindex' => true
        ));
    }
}
