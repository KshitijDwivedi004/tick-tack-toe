import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

class fileHandling{
    public static void main(String[] args) throws IOException {
        System.out.println("hello world");

        File file = new File("text.txt");
        file.createNewFile();
        System.out.println(file.exists());
        FileWriter fw = new FileWriter(file);
        BufferedWriter bw = new BufferedWriter(fw);

        bw.write("hello world \n");
        bw.write("hello world this is me");
        bw.close();


        FileReader fr = new FileReader(file);
        BufferedReader br = new BufferedReader(fr);

        System.out.println(br.readLine());
        System.out.println(br.readLine());
        // FilterWriter fr = new FilterWriter("file");
        
    }
}