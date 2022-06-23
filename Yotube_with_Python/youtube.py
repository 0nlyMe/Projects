from pytube import YouTube

link  = input('YouTube link: ')
video_object = YouTube(link)

# information
print(f'Title: {video_object.title}')
print(f'length: {round(video_object.length / 60,2)} minutes')
print(f'views: {video_object.views / 1000000} million')
print(f'author: {video_object.author}')

# download
print('download: (b)est | (w)orst | (a)udio | (e)xit')
download_choice = input('choice: ')

match download_choice:
    case 'b':
        video_object.streams.get_highest_resolution().download(r'/Users/anasshaikh/Downloads')
    case 'w':
        video_object.streams.get_lowest_resolution().download(r'/Users/anasshaikh/Downloads')
    case 'b':
        video_object.streams.get_audio_only().download(r'/Users/anasshaikh/Downloads')