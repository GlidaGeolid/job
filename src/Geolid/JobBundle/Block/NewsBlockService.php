<?php
namespace Geolid\JobBundle\Block;

use Doctrine\ORM\EntityManager;
use Sonata\AdminBundle\Form\FormMapper;
use Sonata\BlockBundle\Block\BaseBlockService;
use Sonata\BlockBundle\Block\BlockContextInterface;
use Sonata\BlockBundle\Model\BlockInterface;
use Sonata\CoreBundle\Validator\ErrorElement;
use Symfony\Bundle\FrameworkBundle\Templating\EngineInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class NewsBlockService extends BaseBlockService
{
    /** @var EntityManager $em */
    private $em;

    private $news_base_url;
    private $news_end_url;

    /**
     * @param string $name
     * @param EntityManager $em
     * @param EngineInterface $templating
     */
    public function __construct($name, EntityManager $em, EngineInterface $templating, $nbu, $neu)
    {
        $this->name = $name;
        $this->em = $em;
        $this->templating = $templating;
        $this->news_base_url = $nbu;
        $this->news_end_url = $neu;
    }

    /**
     * {@inheritdoc}
     */
    public function getName()
    {
        return 'Job News';
    }

    /**
     * {@inheritdoc}
     */
    public function setDefaultSettings(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'template' => 'GeolidJobBundle:Block:news.html.twig'
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function buildEditForm(FormMapper $formMapper, BlockInterface $block)
    {
    }

    /**
     * {@inheritdoc}
     */
    public function validateBlock(ErrorElement $errorElement, BlockInterface $block)
    {
    }

    /**
     * {@inheritdoc}
     */
    public function execute(BlockContextInterface $blockContext, Response $response = null)
    {
        $repository = $this->em->getRepository('GeolidJobBundle:Post');
        $news = $repository->lastn(2);

        $settings = $blockContext->getSettings();
        return $this->renderResponse($blockContext->getTemplate(), array(
            'block'     => $blockContext->getBlock(),
            'settings'  => $blockContext->getSettings(),
            'news' => $news,
            'news_base_url' => $this->news_base_url,
            'news_end_url' => $this->news_end_url,
        ), $response);
    }
}
