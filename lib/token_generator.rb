class TokenGenerator
  TOKEN_LENGTH = 20

  def self.generate_token(&blk)
    blk ||= Proc.new { true }

    loop do
      token = SecureRandom.urlsafe_base64(TOKEN_LENGTH)
      return token if blk.call(token)
    end
  end
end
