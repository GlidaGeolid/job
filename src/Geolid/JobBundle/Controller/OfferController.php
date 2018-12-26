<?php
namespace Geolid\JobBundle\Controller;

use Geolid\JobBundle\Entity\Offer;
use Geolid\JobBundle\Form\Model\OfferFilter;
use Geolid\JobBundle\Form\Type\ContractType;
use Geolid\JobBundle\Form\Type\OfferFilterType;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route("/offres-emplois")
 */
class OfferController extends Controller
{
    /**
     * @Route(
     *     "/",
     *     name="job_offers",
     *     host="{country}.{domain}",
     *     requirements={"country": "fr", "domain":"%geolid_job.domain%"},
     *     defaults={"country": "fr", "domain":"%geolid_job.domain%"}
     *     , methods={"GET"}
     * )
     * @Template()
     */
    public function offersAction($country, Request $request)
    {

        $request = $this->container->get('request_stack')->getCurrentRequest();
//        $request = $this->getRequest();
        $params = array();

        $filter = new OfferFilter();
//        if ($request->query->get('contrat') == 'stage') {
        if ($request->query->get(ContractType::class) == 'stage') {
            $filter->contract = Offer::CONTRACT_STAGE;
            $params['contract'] = Offer::CONTRACT_STAGE;
        }
        if ($request->query->get('agency') != '') {
            // Agency should be an id, not an url.
            // This is why the filter doesn't work.
            $filter->agency = $request->query->get('agency');
            $params['agency'] = $request->query->get('agency'); 
        }

        $form = $this->createForm(
            OfferFilterType::class,
            $filter,
            array('country' => $country)
        );
        $form->handleRequest($request);
        if ($form->isValid()) {
            $data = $form->getData();
            if ($data->job) {
                $job = $data->job;
                $params['job'] = $job;
            }
            if ($data->sector) {
                $sector = $data->sector;
                $params['sector'] = $sector;
            }
            if ($data->agency) {
                $agency = $data->agency->getName();
                $params['agency'] = $agency;
            }
            if ($data->contract) {
                $contract = $data->contract;
                $params['contract'] = $contract;
            }
        }

        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository('GeolidJobBundle:Offer');
        $offers = $repository->browse($params);

        // TODO:
        // http://api.symfony.com/2.0/Symfony/Component/Form/Form.html
        // Clear the select fields, keep only meaningful filters.

//        return array(
//            'country' => $country,
//            'form' => $form->createView(),
//            'offers' => $offers,
//        );
        return $this->render('GeolidJobBundle:Offer:offers.html.twig', array(
            'form' => $form->createView(),
            'offers' => $offers,
            'country' => $country,
        ));


    }

    /**
     * @Route(
     *     "/{agency}/{slug}",
     *     name="job_offer",
     *     host="{country}.{domain}",
     *     requirements={"country": "de|fr", "domain":"%geolid_job.domain%"},
     *     defaults={"country": "fr", "domain":"%geolid_job.domain%"}
     * )
     * @Template()
     */
    public function offerAction($agency, $slug, $country)
    {
        $em = $this->getDoctrine()->getManager();
        $repository = $em->getRepository('GeolidJobBundle:Offer');
        $offer = $repository->findSlug($slug);

        if (!$offer) {
            throw $this->createNotFoundException('No matching offer.');
        }

        $backlink = $this->generateUrl('job_offers');
        if ($country == 'de') {
            $backlink = $this->generateUrl('job_home', array('country' => 'de'));
        }

        return array(
            'backlink' => $backlink,
            'country' => $country,
            'offer' => $offer,
        );

    }
}
