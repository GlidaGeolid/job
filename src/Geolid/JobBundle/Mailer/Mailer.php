<?php
namespace Geolid\JobBundle\Mailer;

use Swift_Mailer;
use Swift_Message;
use Twig_Environment;

/**
 * Mail manager.
 *
 * Use the host sendmail or sendgrid depending on the destination domain.
 * Contains prepared emails.
 */
class Mailer
{
    protected $mailer;
    protected $sendgrid;
    protected $twig;
    protected $parameters;

    /**
     * @param Swift_Mailer $mailer
     * @param Swift_Mailer $sendgrid
     * @param Twig_Environment $twig
     * @param array $parameters
     */
    public function __construct(Swift_Mailer $mailer, Swift_Mailer $sendgrid, Twig_Environment $twig, array $parameters)
    {
        $this->mailer = $mailer;
        $this->sendgrid = $sendgrid;
        $this->twig = $twig;
        $this->parameters = $parameters;
    }

    public function sendConfirmationEmailMessage($application)
    {
        $template = 'GeolidJobBundle:Apply:email-confirmation.html.twig';
        $context = array('application' => $application);
        $from = array($this->parameters['from_email'] => $this->parameters['from_name']);
        $this->sendMessage($template, $context, $from, $application->getEmail());
    }

    public function sendNotificationEmailMessage($to, $application, $offer, $applicationsUrl, $rhManagerUrl, $geolidLegacyApiUrl)
    {
        $template = 'GeolidJobBundle:Apply:email-notification.html.twig';
        $context = array(
            'application' => $application,
            'offer' => $offer,
            'applications_url' => $applicationsUrl,
            'rh_manager_url' => $rhManagerUrl,
            'legacy_api_url' => $geolidLegacyApiUrl,
        );
        $from = array($this->parameters['from_email'] => $this->parameters['from_name']);
        $this->sendMessage($template, $context, $from, $to);
    }

    /**
     * @param string $templateName
     * @param array $context
     * @param string $from
     * @param string $to
     */
    protected function sendMessage($templateName, $context, $from, $to)
    {
        $context = $this->twig->mergeGlobals($context);
        $template = $this->twig->loadTemplate($templateName);
        $subject = $template->renderBlock('subject', $context);
        $body = $template->renderBlock('body', $context);

        $message = Swift_Message::newInstance()
            ->setSubject($subject)
            ->setFrom($from)
            ->setTo($to);

        $message->setBody($body, 'text/html');

        /**
         * Use the host's sendmail or sendgrid depending on the destination domain.
         * At this time, geolid.jobs hasn't the same host as geolid.com, and mails go to spam,
         * so we use sendgrid for all mails.
         *
        if (preg_match('/@geolid.com/', $to)) {
            $this->mailer->send($message);
        }
        else {
            $this->sendgrid->send($message);
        }
         */
        $this->sendgrid->send($message);
    }
}
