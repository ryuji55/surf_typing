module ApplicationHelper
  def default_meta_tags
    {
      site: 'SurfTyping',
      title: 'SurfTyping',
      reverse: true,
      charset: 'utf-8',
      description: '海を感じながら…サーフムービーをバックにタイピングの練習ができるアプリです',
      keywords: 'タイピングゲーム,サーフィン,海,アコースティックギター,前向きな言葉',
      canonical: request.original_url,
      icon: [
        # { href: image_url('favicon.ico')},
      ],
      og: {
        site_name: :site,
        title: :title,
        description: :description,
        type: 'website',
        url: request.original_url,
        image: asset_pack_url('media/images/ogp.jpg'),
        local: 'ja-JP'
      },
      twitter: {
        card: 'summary_large_image',
        site: '@otokomigakimasu',
        image: asset_pack_url('media/images/ogp.jpg')
      }
    }
  end
end
