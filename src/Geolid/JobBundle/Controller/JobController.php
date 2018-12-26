<?php
namespace Geolid\JobBundle\Controller;

use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;

/**
 * Job Controller.
 *
 * @Route("/metiers")
 */
class JobController extends Controller
{
    /**
     * @Route(
     *     "/",
     *     name="job_jobs",
     *     host="{country}.{domain}",
     *     requirements={"country": "fr", "domain":"%geolid_job.domain%"},
     *     defaults={"country": "fr", "domain":"%geolid_job.domain%"}
     *     , methods={"GET"}
     * )
     * @Template()
     */
    public function jobsAction($country)
    {
        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository('GeolidJobBundle:Job');
        $jobs = $repository->listJobsByCategories($country);

        return $this->render('GeolidJobBundle:Job:jobs.html.twig', array(
            'jobs' => $jobs,
        ));
    }

    /**
     * @Route(
     *     "/{slug}",
     *     name="job_job",
     *     host="{country}.{domain}",
     *     requirements={"country": "fr", "domain":"%geolid_job.domain%"},
     *     defaults={"country": "fr", "domain":"%geolid_job.domain%"}
     * )
     */
    public function jobAction($slug)
    {
        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository('GeolidJobBundle:Job');
        $job = $repository->findOneBySlug($slug);
        $starred = $repository->findBy(array('starred' => 1));

        if (!$job) {
            throw $this->createNotFoundException('Job not found');
        }

        $testimonialBaseUrl = $this->container->getParameter('geolid_job.testimonial_base_url');

        // Chargement d'un template spécifique pour les dévs
        $template = $slug == 'developpeur' ? 'GeolidJobBundle:Job:dev_job.html.twig' : 'GeolidJobBundle:Job:job.html.twig';

        return $this->render($template, array(
            'job' => $job,
            'testimonial_base_url' => $testimonialBaseUrl,
            'starred' => $starred,
        ));
    }
}
