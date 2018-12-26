<?php
namespace Geolid\JobBundle\Namer;

use Geolid\CoreBundle\Helpers\String\String;
use Vich\UploaderBundle\Mapping\PropertyMapping;
use Vich\UploaderBundle\Naming\NamerInterface;

/**
 * Curriculum Vitae Namer class.
 */
class CvNamer implements NamerInterface
{
    /**
     * {@inheritDoc}
     */
    public function name($object, PropertyMapping $mapping)
    {
        /** @var $file UploadedFile */
        $file = $mapping->getFile($object);
        $slug = String::slug($file->getClientOriginalName());
        return uniqid() . '_' . $slug;
    }
}
