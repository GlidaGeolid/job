<?php
namespace Geolid\JobBundle;

/**
 * Contains all events thrown in the Geolid\JobBundle
 */
final class GeolidJobEvents
{
    /**
     * The APPLICATION_CREATE event occurs when the apply form is submitted successfully.
     *
     * This event allows you to access the candidate informations.
     * The event listener method receives a Geolid\JobBundle\Event\FormEvent instance.
     */
    const APPLICATION_CREATE = 'geolid_job.application.create';
}
