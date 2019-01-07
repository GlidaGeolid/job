<?php
namespace Geolid\JobBundle\Controller;

use Geolid\JobBundle\Entity\Application;
use Geolid\JobBundle\Entity\Offer;
use Geolid\JobBundle\Event\FormEvent;
use Geolid\JobBundle\Form\Type\ApplyType;
use Geolid\JobBundle\Form\Type\JobType;
use Geolid\JobBundle\GeolidJobEvents;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;


/**
 * @Route("/candidater")
 */
class ApplyController extends Controller
{

    /**
     * @Route(
     *     "/",
     *     name="job_apply",
     *     host="{country}.{domain}",
     *     requirements={"country": "fr|de", "domain":"%geolid_job.domain%"},
     *     defaults={"country": "fr", "domain":"%geolid_job.domain%"}
     *     , methods={"GET"}
     * )
     * @Template()
     */
    public function applyAction(Request $request, $country)
    {
        $dispatcher = $this->container->get('event_dispatcher');
        $em = $this->getDoctrine()->getManager();
        $offerRepository = $em->getRepository('GeolidJobBundle:Offer');
        $refererRepository = $em->getRepository('GeolidJobBundle:Referer');
        $application = new Application();
        $form = $this->createForm(ApplyType::class);
        $form->handleRequest($request);
         //dump($offer = $form->get('offer')->getData());die('ook');
        if ($form->isValid()) {

            if ($application->getSource() == Application::SOURCE_GEOLID) {
                $offer = $form->get('offer')->getData();
                $application->setContract($offer->getContract());
                $application->setAgency($offer->getAgency());
                $application->setJob($offer->getJob());
                $application->setTitle($offer->getTitle());
                $application->setZone($offer->getZone());
            }
            elseif ($application->getSource() == Application::SOURCE_SPONTANEOUS) {
            }

            // Set the application referer.
            $refererId = $this->get('session')->get('job_apply/referer');
            $referer = $refererRepository->find($refererId);
            $application->setReferer($referer->getId());

            //Assausation Errer String MAnyToOne And uploade file
//            $em->persist($application);
//            $em->flush();
//            $event = new FormEvent($form, $request);
//            $dispatcher->dispatch(GeolidJobEvents::APPLICATION_CREATE, $event);
            $this->get('session')->set('job_apply/success', true);
//            return new RedirectResponse($this->generateUrl('GeolidJobBundle:Apply:thanks.html.twig', array('country' => $country)));
            return $this->render('GeolidJobBundle:Apply:thanks.html.twig', array(
                'country' => $country,

            ));
        }

        /**
         * Check the request POST data for an offer slug.
         * If found, set the default offer accordingly.
         * Used select one offer when coming from a offer page.
         */
        $slug = $request->request->get('slug');
        if ($slug) {
            $offer = $offerRepository->findOneBySlug($slug);
            if (!$offer) {
                throw $this->createNotFoundException('No matching offer.');
            }
            $form->get('source')->setData(Application::SOURCE_GEOLID);
            $form->get('offer')->setData($offer);
        }
//        dump($form);die('ooooooook');
        return $this->render('GeolidJobBundle:Apply:apply.html.twig', array(
            'country' => $country,
            'form' => $form->createView()
        ));
    }

    /**
     * @Route(
     *     "/merci",
     *     name="job_apply_thanks",
     *     host="{country}.{domain}",
     *     requirements={"country": "fr|de", "domain":"%geolid_job.domain%"},
     *     defaults={"country": "fr", "domain":"%geolid_job.domain%"}
     * )
     * @Template()
     */
    public function thanksAction(Request $request, $country)
    {
        $success = $this->get('session')->get('job_apply/success');
        if (!$success) {
            throw new NotFoundHttpException('No new application');
        }
        $this->get('session')->remove('job_apply/success');

        $email = $this->get('session')->get('job_apply/email');
        $this->get('session')->remove('job_apply/email');
        return array(
            'country' => $country,
            'email' => $email
        );
    }
}
