<?php
namespace Geolid\JobBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Templating\TemplateReference;
use Symfony\Bundle\TwigBundle\Controller\ExceptionController as BaseExceptionController;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpKernel\Exception\FlattenException;
use Symfony\Component\HttpKernel\Log\DebugLoggerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Twig_Environment;

/**
 * {@inheritdoc}
 */
class ExceptionController extends BaseExceptionController
{
    /** @var ContainerInterface $factory */
    private $container;

    /**
     * {@inheritdoc}
     */
    public function __construct(
        ContainerInterface $container,
        Twig_Environment $twig,
        $debug
    ) {
        $this->container = $container;
        $this->twig = $twig;
        $this->debug = $debug;
    }

    /**
     * {@inheritdoc}
     */
    public function showAction(
        Request $request,
        FlattenException $exception,
        DebugLoggerInterface $logger = null,
        $_format = 'html'
    ) {
        $currentContent = $this->getAndCleanOutputBuffering($request->headers->get('X-Php-Ob-Level', -1));
        $code = $exception->getStatusCode();
        $country = $this->container->get('country');

        switch ($country) {
            case 'de':
                $template = 'GeolidJobBundle:Exception:error.de.html.twig';
                break;
            case 'fr':
            default:
                $template = 'GeolidJobBundle:Exception:error.html.twig';
                break;
        }
        return new Response($this->twig->render(
            $template,
            array(
                'country' => $country,
                'status_code' => $code,
                'status_text' => isset(Response::$statusTexts[$code]) ? Response::$statusTexts[$code] : '',
                'exception' => $exception,
                'logger' => $logger,
                'currentContent' => $currentContent,
            )
        ));
   }
}
