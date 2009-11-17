begin
  require 'ya2yaml'
  $KCODE = 'u'
  YAML_METHOD = :ya2yaml
rescue LoadError
  YAML_METHOD = :to_yaml
end
require 'activesupport'

desc "Generate new blog post"
task :post, :title do |t, args|
  if args.title.blank?
    puts %{Add meg a bejegyzés címét így:}
    puts %{  $ rake post["Új bejegyzésem"]}
    exit 1
  end
  time = Time.new
  metadata = {
    'layout' => 'post',
    'title' => args.title,
    'created_at' => time
  }
  filename = "_posts/#{time.strftime("%Y-%m-%d")}-#{slugify(args.title)}.markdown"
  File.open(filename, "w") do |f|
    f.write(metadata.send(YAML_METHOD))
    f.puts "---"
    f.puts "a legújabb lackac.hu blogbejegyzés"
  end
  puts "#{filename} created."
  if ENV['EDITOR']
    puts "Opening with #{ENV['EDITOR']}..."
    exec(ENV['EDITOR'], filename) if fork.nil?
  end
end

ACCENTS_TR = [
  "aäáàâãcçeëéèêiïíìînñoöóòõôőuüúùûűAÄÁÀÂÃCÇEËÉÈÊIÏÍÌÎNÑOÖÓÒÕÔŐUÜÚÙÛŰ".scan(/./u),
  "aaaaaacceeeeeiiiiinnooooooouuuuuuAAAAAACCEEEEEIIIIINNOOOOOOOUUUUUU".scan(/./u),
]

def slugify(str)
  str.dup.tap do |s|
    ACCENTS_TR.first.each_with_index do |char, i|
      s.gsub!(char, ACCENTS_TR.last[i])
    end
    s.gsub!(/[^a-zA-Z0-9_ -]/, "")
    s.gsub!(/[ _-]+/, " ")
    s.strip!
    s.tr!(' ', "-")
    s.downcase!
  end
end
