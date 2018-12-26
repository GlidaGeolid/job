<?php
namespace Geolid\JobBundle\EventListener;

use Doctrine\ORM\EntityManager;
use Geolid\JobBundle\Event\FormEvent;
use Geolid\JobBundle\GeolidJobEvents;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * Ping api geolid pour récupérer les fichiers uploadé
 */
class ApplyUploadedFilesListener implements EventSubscriberInterface
{
    /**
     * @var string url de l'api (par ex http://www.geolid-jplantey.local/api/)
     */
    private $legacyApiBaseUrl;
    /**
     * @var EntityManager
     */
    private $em;
    /**
     * @var
     */
    private $kernelRootDir;

    public function __construct(EntityManager $em, $legacyApiBaseUrl, $kernelRootDir)
    {
        $this->legacyApiBaseUrl = $legacyApiBaseUrl;
        $this->em = $em;
        $this->kernelRootDir = $kernelRootDir;
    }

    public static function getSubscribedEvents()
    {
        return array(GeolidJobEvents::APPLICATION_CREATE => 'onApplicationCreate');
    }

    public function onApplicationCreate(FormEvent $event)
    {
        /** @var $application \Geolid\JobBundle\Entity\Application */
        $application = $event->getForm()->getData();

        $postdata = http_build_query([
            'rh_candidat_id' => $application->getId()
        ]);

        $streamContext = stream_context_create([
            'http' => [
                'method' => 'POST',
                'content' => $postdata,
                'header'  => 'Content-type: application/x-www-form-urlencoded',
            ]
        ]);

        $response = file_get_contents($this->legacyApiBaseUrl.'jobs/import_application_files', false, $streamContext);

        $response = json_decode($response);

        if (isset($response->nb_imported_files)) {
            if ($application->getCvFilename()) {
                unlink($this->kernelRootDir.'/../web/job/application/'.$application->getCvFilename());
                $application->setCvFilename('');
            }

            if ($application->getClFilename()) {
                unlink($this->kernelRootDir.'/../web/job/application/'.$application->getClFilename());
                $application->setClFilename('');
            }

            if ($application->getCertificatesFilename()) {
                unlink($this->kernelRootDir.'/../web/job/application/'.$application->getCertificatesFilename());
                $application->setCertificatesFilename(null);
            }

            $this->em->flush();
        }
    }
}
