class Project < ApplicationRecord
  belongs_to :user

  def self.random_gradient
  [
      'linear-gradient(to right, #d3959b, #bfe6ba)',
      'linear-gradient(to right, #f2709c, #ff9472)', 
      'linear-gradient(to right, #ddd6f3, #faaca8)',
      'linear-gradient(to right, #c21500, #ffc500)',
      'linear-gradient(to right, #4b6cb7, #182848)',
      'linear-gradient(to right, #fc354c, #0abfbc)',
      'linear-gradient(to right, #5f2c82, #49a09d)',
      'linear-gradient(to right, #7474bf, #348ac7)',
      'linear-gradient(to right, #ed4264, #ffedbc)'
    ].sample
  end

  def self.random_photo
    %w[
      ballot-box-with-ballot_1f5f3.png
      books_1f4da.png
      camera_1f4f7.png
      crystal-ball_1f52e.png
      desktop-computer_1f5a5.png
      gem-stone_1f48e.png
      headphone_1f3a7.png
      joystick_1f579.png
      nazar-amulet_1f9ff.png
      new-moon-with-face_1f31a.png
      package_1f4e6.png
      personal-computer_1f4bb.png
      television_1f4fa.png
      video-game_1f3ae.png
      wrapped-present_1f381.png
    ].sample
  end
end
