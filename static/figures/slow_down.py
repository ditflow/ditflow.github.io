from PIL import Image, ImageSequence

def slow_down_gif(input_path, output_path):
    # Open the original GIF
    with Image.open(input_path) as img:
        # Create a list to store the frames
        frames = []
        
        # Iterate over each frame in the original GIF
        for frame in ImageSequence.Iterator(img):
            # Append the frame to the list
            frames.append(frame.copy())
        
        # Save the frames as a new GIF with doubled duration
        frames[0].save(
            output_path,
            save_all=True,
            append_images=frames[1:],
            duration=img.info['duration'] * 2,  # Double the duration for each frame
            loop=0
        )

# Example usage
slow_down_gif('projectpage_figure.gif', 'projectpage_teaser_slow.gif')
