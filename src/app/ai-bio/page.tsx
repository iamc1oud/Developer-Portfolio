"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Sparkles } from "lucide-react";
import { suggestBio, type SuggestBioInput, type SuggestBioOutput } from "@/ai/flows/suggest-bio";
import SectionTitle from "@/components/shared/SectionTitle";

const bioGeneratorSchema = z.object({
  profileDetails: z.string().min(50, { message: "Please provide at least 50 characters for profile details." }),
  codeRepositories: z.string().min(20, { message: "Please provide at least 20 characters for code repository summary." }),
});

type BioGeneratorFormValues = z.infer<typeof bioGeneratorSchema>;

export default function AiBioPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<BioGeneratorFormValues>({
    resolver: zodResolver(bioGeneratorSchema),
    defaultValues: {
      profileDetails: "",
      codeRepositories: "",
    },
  });

  async function onSubmit(data: BioGeneratorFormValues) {
    setIsLoading(true);
    setSuggestions([]);
    setError(null);
    try {
      const inputData: SuggestBioInput = {
        profileDetails: data.profileDetails,
        codeRepositories: data.codeRepositories,
      };
      const result: SuggestBioOutput = await suggestBio(inputData);
      setSuggestions(result.suggestedPhrases);
    } catch (err) {
      console.error("Error generating bio suggestions:", err);
      setError("Failed to generate bio suggestions. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <SectionTitle>AI Bio Helper</SectionTitle>
      <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
        Leverage AI to craft an impactful personal statement. Provide some details about your skills, experience, projects, and a summary of your code repositories, and let our AI suggest compelling phrases for your bio.
      </p>

      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Sparkles className="w-6 h-6 mr-2 text-accent" />
            Generate Bio Suggestions
          </CardTitle>
          <CardDescription>
            Fill in the details below to get AI-powered bio suggestions.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="profileDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profile Details</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your skills, experience, key projects, and career goals..."
                        {...field}
                        rows={6}
                        className="focus:ring-accent"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="codeRepositories"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Code Repositories Summary</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Briefly summarize your main code repositories, types of projects, technologies used, etc."
                        {...field}
                        rows={4}
                        className="focus:ring-accent"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Suggest Bio Phrases"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        {(suggestions.length > 0 || error) && (
          <CardFooter className="flex flex-col items-start pt-6">
            {error && <p className="text-sm text-destructive mb-4">{error}</p>}
            {suggestions.length > 0 && (
              <>
                <h3 className="text-lg font-semibold text-primary mb-3">Suggested Phrases:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                  ))}
                </ul>
              </>
            )}
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
