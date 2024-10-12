import useSWR from 'swr';
import { fhirBaseUrl, openmrsFetch } from '@openmrs/esm-framework';

/**
 * This hook fetches growth observations (e.g., height, weight) for a patient
 * from the OpenMRS FHIR API.
 *
 * @param patientId The UUID of the patient whose growth data is being fetched
 * @param growthCode The LOINC code for the growth observation (e.g., height, weight)
 * @returns An object containing growth data for the specified patient
 */
export function useGrowthData(patientId: string, growthCode: string) {
  const url = `${fhirBaseUrl}/Observation?patient=${patientId}&code=${growthCode}&_summary=data`;

  const { data, error, isLoading } = useSWR<{ entry: Array<{ resource: fhir.Observation }> }, Error>(
    patientId ? url : null,
    openmrsFetch as any,
  );

  return {
    growthData: data ? data.entry.map((entry) => entry.resource) : [],
    error,
    isLoading,
  };
}
